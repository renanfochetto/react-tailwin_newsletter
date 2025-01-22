// eslint-disable-next-line react/prop-types
const Article = ({ title, text, tags, image, alt }) => {
    return <div className="flex-col p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex gap-2 flex-col-items-center sm:hover:shadow-gray-500 sm:hover:dark:shadow-black sm:hover:shadow-lg">
        <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
        <div className="w-full sm:flex sm:flex-row justify-end gap-2 pr-5 hidden">
            {
                // eslint-disable-next-line react/prop-types
                tags.map(tag => <span key={tag} className="bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 dark:text-gray-400 text-xs font-bold uppercase hover:scale-110 cursor-pointer">{tag}</span>)
            }
        </div>
        <div className="grid gap-1">
            {
                // eslint-disable-next-line react/prop-types
                text.map((content, index) => <p key={index} className="text-alura-200 dark:text-gray-300">{content}</p>)
            }
        </div>
        { image && <img src={image} className="w-full h-48 object-cover mt-5" /> }
        { image && alt && <span className="sr-only">{alt}</span>}
    </div>
}

export default Article;
