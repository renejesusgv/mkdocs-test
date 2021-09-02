build:
	docker build -t tw-mkdocs-img .

run:
	docker run -it --rm -p 9090:9090 -v ${PWD}:/app tw-mkdocs-img:latest 

local-connect:
	docker run -it --rm -v ${PWD}:/app tw-mkdocs-img:latest /bin/bash
