import axios from "axios";
import { useEffect, useState } from "react";

const SecurityList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=crypto%20AND%20(blockchain)&apiKey=75e98f479be948cebad68ba962e010fe')
        const data = await response.data
        const securityData = data.articles
        console.log(securityData)
        setData(securityData)
      } catch (error) {
        if (err instanceof Error) {
          console.log(err);
        } else {
          console.log(`Error: ${String(err)}`);
        }
      }
    }
    fetchData()
  }, [])

  // const articles = data.articles
  // console.log(console.log(Array.isArray(articles)))
  console.log(data)
  return (
    <section className="text-center mt-8 p-4">
      <h3 className="text-3xl font-semibold">Security</h3>
      <p className="text-lg font-mono font-semibold text-gray-400">
        sint occaecat cupidatat non proident
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(article => 
          <section key={article.publishedAt} className="flex flex-col items-center gap-3 mt-8">
            <div className= {`bg-[url(${article.urlToImage})] bg-cover bg-center h-96 mt-6 flex items-end justify-end`}>
              <div className="bg-bgBody opacity-80 p-8 h-3/6">
                <h2 className="font-mono text-base text-center">
                  {article.title}
                </h2>
              </div>
            </div>
            <p className="p-2 px-4 bg-blue-800 text-center w-2/6">Security</p>
            <p className="font-mono text-lg text-gray-300 line-clamp-2">
              {article.description}
            </p>
            <div className="flex items-center gap-2">
              <p>{article.author}</p>
              <div className="w-10 h-10 rounded-full bg-[url(/img/andre.jpg)] bg-cover bg-center"></div>
            </div>
          </section>
        )}
      </section>
    </section>
)};

export default SecurityList;
