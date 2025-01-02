let projects = [
	# restaurant-page
	# todo-app
	# weather-app
	# shopping-cart
	# memory-cards
	cv-maker
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
	git remote add $project $"git@github.com:NikitaRevenco/odin-project-($project).git"
	git fetch $project
	git rebase $"($project)/main"
}
