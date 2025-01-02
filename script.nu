let projects = [
	restaurant-page
	todo-app
	weather-app
	shopping-cart
	memory-cards
	cd-maker
	responsive-homepage
	battleship
	knight-travails
	binary-search-tree
	hashmap
	linked-list
	recursion
	library
	etch-a-sketch
	tic-tac-toe
	admin-dashboard
	signup-form
	calculator
	rock-paper-scissors
	landing-page
	recipes
]

for project in $projects {
	git clone $"git@github.com:NikitaRevenco/odin-project-($project).git"
	mv ...(glob $"odin-project-($project)/.git") ~/lol2
	mv ...(glob $"odin-project-($project)/*") ~/lol
	mv ...(glob $"($env.HOME)/lol2/.git") $"odin-project-($project)"
	cd $"odin-project-($project)"
	mkdir $project
	mv ...(glob $"($env.HOME)/lol/*") $project
	git commit -am "chore: create subdirectory"
	git push
	cd ..
}
