import articleStyles from '../styles/Article.module.css'
import {ArticleItem} from './ArticleItem'

export const ArticleList =({ articles }) =>{
    return (
        <div className={ articleStyles.grid }>
            { articles.map(article => {
                return <ArticleItem article={ article } key={article.id}/>
            }) }
        </div>
    )
}
