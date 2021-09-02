#!/usr/bin/env python3
from pprint import pprint
import yaml
import sys
import frontmatter
# Import Yamale and make a schema object:
import yamale
import click
import linecache

@click.command()
@click.option('-v', '--verbose', count=True)
@click.argument('files', nargs=-1, type=str)

def schema_validate(verbose,files):
    """Simple program that greets NAME for a total of COUNT times."""
    def log_error(file_name,message,schema):
        click.echo(f'{file_name}: {message} - from schema {schema}')

    def log(args):
        if verbose>0:
            click.echo(args)
    modified_files = files

    SCHEMA_PATH = 'frontmatter/schema/'

    file_suffix = ".md"
    file_prefix = "docs"
    md_files = [x for x in modified_files if x.endswith(file_suffix) and x.startswith(file_prefix) ]
    log(md_files)
    root_schema = yamale.make_schema(SCHEMA_PATH + 'root.yml')

    error_flag = False

    for md_location in md_files:
        with open(md_location) as f:
            metadata, content = frontmatter.parse(f.read())
            log(metadata)

            data = yamale.make_data(content=yaml.safe_dump(
                metadata, default_flow_style=False))

            # Validate data against the schema.
            # Throws a ValueError if data is invalid.

            log('________________________')
            log("Analysing '%s'" % md_location)
            try:
                yamale.validate(root_schema, data, strict=False)
                document_schema = yamale.make_schema(SCHEMA_PATH +
                                                    metadata['document-type'] +
                                                    ".yml")
                yamale.validate(document_schema, data, strict=False)
                log('Validation succes! 👍')
                log('________________________')
            except ValueError as e:
                log('Validation failed!\n')
                for result in e.results:
                    log("Error validating data '%s' with '%s' ⛔\n\t"
                        % (result.data, result.schema))
                    for error in result.errors:
                        log_error(f.name,error,result.schema)
                        log('________________________')

                error_flag = True

    if error_flag:
        exit(1)


if __name__ == '__main__':
    schema_validate()

