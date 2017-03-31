# make setup

# Colors
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

installdjango:
	@pip install -r requirements.txt

migrate:
	@./manage.py makemigrations core
	@./manage.py migrate

createuser:
	echo "${green}>>> Creating a 'admin' user ...${reset}"
	@./manage.py createsuperuser --username='admin' --email=''

backup:
	@./manage.py dumpdata core --format=json --indent=2 > fixtures.json
	echo "${green}>>> backup created successfully: fixtures.json${reset}"

load:
	@./manage.py loaddata fixtures.json

run:
	@./manage.py runserver

setup: installdjango migrate createuser run