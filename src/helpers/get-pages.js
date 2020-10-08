
import fs from 'fs'
import path from 'path'

function isDir(path) {
	try {
		var stat = fs.lstatSync(path)
		return stat.isDirectory()
	} catch (e) { return false }
}

const vfile = require('to-vfile')
var unified = require('unified')
var remarkParse = require('remark-parse')
var remarkStringify = require('remark-stringify')
const remarkFrontmatter = require('remark-frontmatter')
var remarkParseYaml = require('remark-parse-yaml')
var remarkToRehype = require('remark-rehype')
var rehypeStringify = require('rehype-stringify')

const getPosts = (directory, returnBody = false, limit) => {

	const route = `src/routes/${directory}`
	const posts = fs.readdirSync(route)
		.filter(post => isDir(`${route}/${post}`))
		.map(post => {
			// const file = fs.readFileSync(path.resolve(route, `${post}/index.md`), 'utf-8')
			const file = vfile.readSync(path.resolve(route, `${post}/index.md`), 'utf-8')

			// get file
			// parse markdown to ast
			// abstract yaml fronmatter, convert to obejct
			// remark plugins?
			// remark to rehype
			// rehype plugins?
			// rehype to html string
			// return object {frontmatter: {...fronmatter}, body: html}

			unified()
				.use(remarkParse)
				.use(remarkFrontmatter, ['yaml'])
				.use(remarkParseYaml)
				.use(remarkStringify)
				// .use(remarkToRehype)
				// .use(rehypeStringify)
				// --
				.process(file)
				.then(result => {
					console.dir
					console.log('result.data', result.data)
					// console.log('result.messages', result.messages)
					// console.log('result.history', result.history)
					// console.log('result.cwd', result.cwd)
					// console.log('result.contents', result.contents)
				})
				.catch(console.error)

			return ({
				// ...grayMatter(post).data,
				slug: `${directory}/${post}`,
			})
		})
    // // reverse chronological date sort
    // .filter(post => post.options.published)
		// .sort((a, b) => (a.meta.date < b.meta.date) ? 1 : -1)

	return JSON.stringify(posts)
}

export default getPosts