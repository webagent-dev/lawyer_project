const News = () => {
    const list = [1,2,3,4,5,6,7,8,9,10,11]
    return(
        <section className="news">
            <div className="main-news">
                <div className="news-grid">
                    <div className="news-item-1">
                     <h2 className="heading">news on trending</h2>
                     <div className="inner-grid">
                            {/* {
                                list.map(item =>(
                                    console.log(item)
                                ))
                            } */}
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default News