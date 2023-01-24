all:
	tree -H '.' -L 1 --noreport -T 'Lectures' --si -D --charset utf-8 -I index.html -o './lectures/index.html' './lectures/'
	tree -H '.' -L 1 --noreport -T 'Assignments' --si -D --charset utf-8 -I index.html -o './assignments/index.html' './assignments/'
	tree -H '.' -L 1 --noreport -T 'Resources' --si -D --charset utf-8 -I index.html -o './resources/index.html' './resources/'
