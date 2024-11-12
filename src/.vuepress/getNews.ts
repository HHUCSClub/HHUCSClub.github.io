// docs/.vuepress/sidebar/getArticles.ts
import { fs, path } from '@vuepress/utils'
import matter from 'gray-matter'

export function getNews() {
  const articlePath = path.resolve(__dirname, '../News')
  
  if (!fs.existsSync(articlePath)) {
    return []
  }

  const files = fs.readdirSync(articlePath)
  
  return files
    .filter(file => 
      file.endsWith('.md') && 
      file !== 'README.md' &&
      !file.startsWith('.')
    )
    .map(file => {
      const content = fs.readFileSync(path.join(articlePath, file), 'utf-8')
      const { data } = matter(content)
      const filePath = path.join(articlePath, file)
      const fileStats = fs.statSync(filePath)
      
      return {
        text: data.title || content.match(/^#\s(.*)$/m)?.[1] || file.replace('.md', ''),
        link: `/News/${file.replace('.md', '')}`,
        date: fileStats.mtime 
      }
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime()) 
    .map(({ text, link }) => ({ text, link })) 
}