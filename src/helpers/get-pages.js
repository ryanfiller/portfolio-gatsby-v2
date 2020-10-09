
import fs from 'fs'
import path from 'path'

const unified = require('unified')
const remarkParse = require('remark-parse')
const remarkStringify = require('remark-stringify')
const remarkFrontmatter = require('remark-frontmatter')
const remarkExtractFrontmatter = require('remark-extract-frontmatter')
const yaml = require('yaml').parse
const remarkToRehype = require('remark-rehype')
const rehypeStringify = require('rehype-stringify')

function isDir(path) {
	try {
		const stat = fs.lstatSync(path)
		return stat.isDirectory()
	} catch (e) { return false }
}

const getPosts = (directory, returnBody = false, slice = [0, undefined]) => {

	const route = `src/routes/${directory}`
	const posts = fs.readdirSync(route)
		.filter(post => isDir(`${route}/${post}`))
		.map(post => {
			const file = fs.readFileSync(path.resolve(route, `${post}/index.md`), 'utf-8')

			let frontmatter
			let html
			
		unified()
			.use(remarkParse)
			.use(remarkFrontmatter, ['yaml'])
			.use(remarkExtractFrontmatter, { yaml: yaml })
			.use(remarkStringify)
			.use(remarkToRehype)
			.use(rehypeStringify)
			.process(file, function (err, file) {
				if (err) {
					console.error('error getting page', err)
				}
				frontmatter = file.data,
				html = !!returnBody ? file.contents : null
			})

			return ({
				...frontmatter,
				slug: `${directory}/${post}`,
				content: html
			})
		})
    // reverse chronological date sort
    .filter(page => page.options.published)
		.sort((a, b) => (a.meta.date < b.meta.date) ? 1 : -1)

		// for pagination, defaults to 0-all
		const [ start, end ] = slice

	return JSON.stringify(posts.slice(start, end))
}

export default getPosts