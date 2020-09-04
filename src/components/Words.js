var programming_languages = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
  "c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
  "ruby",
  "fortran"
]
var movies = ["darbar","bigil","kee","vedhalam","vivegam"]
var cricketer = ["dhoni","kohli","rohit","ashwin","bumrah"]
function randomWord() {
  return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}
function randomWord1() {
	return movies[Math.floor(Math.random() * movies.length)]
}
function randomWord2() {
	return cricketer[Math.floor(Math.random() * cricketer.length)]
}
export { randomWord,randomWord1,randomWord2 }