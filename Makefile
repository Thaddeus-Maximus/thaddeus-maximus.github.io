serve: 
	rm -rf en
	rm -rf _assets/css/screen.css
	sass _assets/css/_sass/screen.sass _assets/css/screen.css
	mynt gen ./ en
	mynt serve en

deploy:
	git add en && git commit -am "Deployment"
	git subtree push --prefix en origin gh-pages