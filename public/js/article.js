// CONTENTFUL API
const client = contentful.createClient({
    space: '9r7ilb8r2v3t',
    accessToken: 'sJWrcjYGjggVaguwCwFUqjV7YN-zR6FbtV69KGkjnk4'
  })




const articlePhoto = document.querySelector(".imageLink")
const articleTitle = document.querySelector(".articleTitle")
const articleDate = document.querySelector(".articleDate")
const articleDetails = document.querySelector(".articleDetails")
const headerTitle = document.querySelector(".articleHeaderTitle");
const articleID = window.location.pathname.split("/")[2];

//Getting and filling blog post content from contentful
client.getEntry(`${articleID}`).then((res) => {
    const clickedArticle = res.fields;
    //   console.log(clickedArticle);
    const { date,newsCategory,newsImage,newsType,title, } = clickedArticle;
    
  
    const imgAsset = client.getAsset(`${newsImage.sys.id}`).then((item) => {
      const imgUrl = `https:${item.fields.file.url}`;
      articlePhoto.src = imgUrl;
    });
  
    articleDate.innerText = date;
    articleTitle.innerText = title;
    headerTitle.innerText = title
    // console.log(headerTitle.innerText)
  });

  //rendering rich text
client.getEntry(`${articleID}`).then((entry) => {
  const rawRichTextField = entry.fields.newsDetails.content;
    var htmlContent = '';
    rawRichTextField.forEach((data) =>{
        const paragraphContent = data.content[0].value;
        htmlContent += `<p>${paragraphContent}</p>`
        articleDetails.innerHTML = htmlContent
    })
})
.then((articleDetails) => {
})
.catch((error) => console.log(error));



const breakingNews = [];

const getEntryItems = async () => {
    const getnews = await client.getEntries({ content_type: "elitesNews" });
    const newsArray = getnews.items;
    const filterbreakingNews = newsArray.filter((news) => {
        return news.fields.newsCategory === "Breaking News";
      });

    breakingNews.push(filterbreakingNews)
    breakingNewsDom();
    breakingNewsDom2();
}

getEntryItems();

// BREAKING NEWS CONTAINER
const breakingNewsDom = () => {
    // Mapping through each item in the breakingNews array
    const eachBreakingNews = breakingNews[0].map((item) => {
      const {
        date,
        newsCategory,
        newsImage,
        newsType,
        title,
      } = item.fields;
      const photo = newsImage.fields.file.url;
      const photoUrl = `https:${photo}`;
      const entryID = item.sys.id;
  
      return `
        <div class="mn-list">
          <div class="mn-img">
            <img src="${photoUrl}" />
          </div>
          <div class="mn-content">
            <a class="mn-title" href="/elitesnews/${entryID}">${title}</a>
            <a class="mn-date" href="/elitesnews/${entryID}"><i class="far fa-clock"></i>${date}</a>
          </div>
        </div>
      `;
    });
  
    const breakingNewsContainer = document.querySelector(".latestNews-aside");
    breakingNewsContainer.innerHTML = eachBreakingNews.join("");
  };
  
  
  // TOP Breaking NEWS
  const breakingNewsDom2 = () =>{
    const eachlocalnews = breakingNews[0][0]
    const {
      date,
      newsCategory,
      newsImage,
      newsType,
      title,
    } = eachlocalnews.fields;
    const photo = newsImage.fields.file.url;
    const photoUrl = `https:${photo}`;
    const entryID = eachlocalnews.sys.id;
    const html = `
          <div class="mn-img">
              <img src="${photoUrl}" />
          </div>
          <div class="mn-content">
              <a class="mn-title" href="/elitesnews/${entryID}"">${title}</a>
              <a class="mn-date" href="/elitesnews/${entryID}"><i class="far fa-clock"></i>${date}</a>
              <p class="shortdescription">
              </p>
          </div>
      `;
    
      const localnewsContainer = document.querySelector(".mainLatestNews");
      localnewsContainer.innerHTML = html;
  
    const shortDesc = document.querySelector('.shortdescription')
  
    client.getEntry(`${entryID}`).then((entry) => {
      const rawRichTextField = entry.fields.newsDetails.content;
      let htmlContent = '';
    
      if (rawRichTextField && rawRichTextField.length > 0) {
        const firstParagraphContent = rawRichTextField[0].content[0].value;
        htmlContent = `<p>${firstParagraphContent}</p>`;
      }
    
      shortDesc.innerHTML = htmlContent;
    })
    .catch((error) => console.log(error));
    }
    
  