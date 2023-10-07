import styles from 'styles/post-categories.module.css'
import Link from 'next/link'

export default function PostCategories({ categories }) {
    return (
        <ul className={styles.list}>
            {categories.map(({ name, slug }) => (
                <li key={slug}>
                    <link href={'/blog/category/${slug}'}>
                        <a>{name}</a>
                    </link>
                </li>
            ))}
        </ul>
    )
}