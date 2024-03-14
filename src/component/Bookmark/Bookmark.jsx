import PropTypes from 'prop-types'
const Bookmark = ({title}) => {
    console.log('title', title);
    return (
        <div className="w-1/3">
            <div className="text-xl font-semibold bg-purple-200 border-2 border-purple-300 rounded-xl p-5 text-purple-500 text-center">Spent Time on Read: 111min</div>

            <div className="p-3 bg-purple-100 rounded-xl my-5">
                <h3 className="font-semibold">Bookmarked Blogs: 0</h3>
                {
                    title.map((title, idx) => {
                        return(
                            <div key={idx} className="p-3 bg-white rounded-xl my-3">
                            {title}
                        </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

Bookmark.propTypes ={
    title: PropTypes.array.isRequired
}

export default Bookmark;