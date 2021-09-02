#!/usr/bin/env python3 
import glob
from dataclasses import dataclass
from pprint import pprint
from typing import List
import markdown
import yaml
import re 

mkdocs_yml = 'mkdocs.yml'
class NoAliasDumper(yaml.SafeDumper):
    def ignore_aliases(self, data):
        return True
    def represent_name(self, data):
        return self.represent_scalar("tag:yaml.org,2002:python/name:" + data.value, "")

class ProxyPythonName(yaml.YAMLObject):
    def __init__(self, value):
        self.value = value


class CustomLoader(yaml.SafeLoader):
    def construct_python_name(self, suffix, node):
        return ProxyPythonName(suffix)


CustomLoader.add_multi_constructor("tag:yaml.org,2002:python/name:", CustomLoader.construct_python_name)
NoAliasDumper.add_representer(ProxyPythonName, NoAliasDumper.represent_name)

def read_file(file):
    with open(file, "r") as f:
        return f.read()


def _get_md_title(md):
    metadata = md.Meta
    if isinstance(metadata, dict) and "title" in metadata:
        return metadata["title"]

    for l in md.lines:
        if "# " in l:
            return l.lstrip("# ").rstrip("\n")


@dataclass
class Document:
    file_path: str
    raw_text: str
    md: any
    metadata: any
    sections: List[str]
    title: str

    @staticmethod
    def from_file_path(file_path):
        raw_text = read_file(file_path)
        md = markdown.Markdown(extensions=["full_yaml_metadata"])
        md.convert(raw_text)
        metadata = md.Meta
        return Document(
            file_path=file_path,
            raw_text=raw_text,
            md=md,
            metadata=metadata,
            sections=metadata.get("sections", []),
            title=_get_md_title(md),
        )

    @property
    def nav_path(self):
        return self.file_path.replace("docs/", "")

def build_nav(path, value, recursive_list):
    """ For each level in path, it builds nested list of dicts. 
        The value is append on the last level list regarding to the path. 
        recursive_list is used internally for recursivity """
    ##TODO: refactor this code later (and add tests)
    
    while path.startswith('/'):
        path = path[1:]
    
    if len(path)==0:
        # At root level, no need to build list of dicts, just append the value at root level
        recursive_list.append(value)
    else:
        parts = path.split('/', 1)
        current_level = parts[0]

        # We need to find if our level of path is already present in the list
        # If we find it, we need to keep a track of the index to be able to update the list
        level_found = False
        index = 0
        for indx, dicts in enumerate(recursive_list):
            if current_level in dicts:
                level_found=True
                index = indx

        if len(parts) > 1:
            # We're at an intermediary path level
            # We need to pass the right existing list to the recursive call OR
            # We need to create an empty node
            if level_found:
                branch=recursive_list[index][current_level]
            else:
                dic = {}
                dic[current_level] = []
                recursive_list.append(dic)
                branch = dic[current_level]
            build_nav(parts[1], value, branch)
        else: 
            # We're at the lowest path level
            # We need to apply our value to the right existing list OR
            # We need to create to a new node with it
            if level_found: 
                
                if value[list(value)[0]].find("index.md") != -1:
                    print("Found! home page out of order for \"", current_level, "\" inserting it at beginning")

                    recursive_list[index][current_level].insert(0,value)
                else:
                    recursive_list[index][current_level].append(value)
            else:
                d = {}
                d[current_level] = [value]
                recursive_list.append(d)
    
  


def build_tree(documents):
    end_list = []
    for document in documents:
        for section in document.sections:
            path_components = section.split("/")
            nav_entry={}
            nav_entry[document.title] = document.nav_path
            #_add_to_tree(document, path_components, store,end_list)
            build_nav(section,nav_entry,end_list)
    return end_list

def set_nav(nav):
    """ Update the nav part in mkdocs conf file """
    with open(mkdocs_yml) as f:
        doc = yaml.load(f,Loader=CustomLoader)
    doc['nav'] = nav
    with open(mkdocs_yml, 'w') as f:
        yaml.dump(doc, f, Dumper=NoAliasDumper)

# use glob utility to find all md files
md_files_paths = glob.glob("docs/**/*.md", recursive=True)
md_files = [Document.from_file_path(x) for x in md_files_paths]
sections_and_paths = build_tree(md_files)
sections_and_paths = sorted(sections_and_paths,key=lambda x: list(x.keys()))
print("################## Nav ########################")
pprint(sections_and_paths)
print("###############################################")
set_nav(sections_and_paths)
