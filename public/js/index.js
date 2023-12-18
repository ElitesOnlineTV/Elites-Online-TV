// CONTENTFUL API
const client = contentful.createClient({
    space: '9r7ilb8r2v3t',
    // environment: 'master', // defaults to 'master' if not set
    accessToken: 'sJWrcjYGjggVaguwCwFUqjV7YN-zR6FbtV69KGkjnk4'
  })

  // News Type
const allnews = [];
const national = []
const sports = [];
const business = [];
const politics = [];
const local = [];
const tech = [];
const entertainment = [];
const health = [];
const lifestyle = [];
const international = [];

// NEWS CATEGORY
const breakingNews = [];
const topNews = [];
const popularNews = [];
const opinion = [];

const getEntryItems = async () => {
    const getnews = await client.getEntries({ content_type: "elitesNews" });
    // console.log(properties.items);
    const newsArray = getnews.items;
    allnews.push(newsArray);
  
     // News Type
    const filternationalnews = newsArray.filter((news) => {
      return news.fields.newsType === "National";
    });
    const filtersportsnews = newsArray.filter((news) => {
      return news.fields.newsType === "Sports";
    });
    const filterbusinessnews = newsArray.filter((news) => {
      return news.fields.newsType === "Business";
    });
    const filterlocalsnews = newsArray.filter((news) => {
      return news.fields.newsType === "Local";
    });
    const filtertechnews = newsArray.filter((news) => {
      return news.fields.newsType === "Tech";
    });
    const filterpoliticsnews = newsArray.filter((news) => {
      return news.fields.newsType === "Politics";
    });
    const filterentertainmentnews = newsArray.filter((news) => {
      return news.fields.newsType === "Entertainment";
    });
    const filterhealthnews = newsArray.filter((news) => {
      return news.fields.newsType === "Health";
    });
    const filterlifestylenews = newsArray.filter((news) => {
      return news.fields.newsType === "Lifestyle";
    });
    const filterinternationalnews = newsArray.filter((news) => {
      return news.fields.newsType === "International";
    });
    // NEWS CATEGORY
    const filterbreakingNews = newsArray.filter((news) => {
      return news.fields.newsCategory === "Breaking News";
    });
    const filtertopNews = newsArray.filter((news) => {
      return news.fields.newsCategory === "Top News";
    });
    const filterpopularNews = newsArray.filter((news) => {
      return news.fields.newsCategory === "Popular News";
    });
    const filteropinion = newsArray.filter((news) => {
      return news.fields.newsCategory === "Opinion";
    });
  

    // RENDER DATA
    national.push(filternationalnews)
    sports.push(filtersportsnews)
    business.push(filterbusinessnews)
    politics.push(filterpoliticsnews)
    local.push(filterlocalsnews)
    tech.push(filtertechnews)
    entertainment.push(filterentertainmentnews)
    health.push(filterhealthnews)
    lifestyle.push(filterlifestylenews)
    international.push(filterinternationalnews)
    breakingNews.push(filterbreakingNews)
    topNews.push(filtertopNews)
    popularNews.push(filterpopularNews)
    opinion.push(filteropinion)
  
    // functions for all news
    nationalDom();
    sportsDom();
    businessDom();
    politicsDom();
    localDom();
    // techDom();
    entertainmentDom();
    healthDom();
    // lifestyleDom();
    internationalDom();
    breakingNewsDom();
    breakingNewsDom2();
    topNewsDom();
    topNewsDom2();
    popularNewsDom();
    popularNewsDom2()
    // opinionDom();

  };
  
  getEntryItems();


// NATIONAL DOM
  const nationalDom = () =>{
    //mapping through each nationalnews array items
  const eachnationalnews = national[0]
  .map((item) => {
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
    <div class="col-md-6">
      <div class="cn-img">
        <img src="${photoUrl}" />
          <div class="cn-content">
            <div class="cn-content-inner">
              <a class="cn-date" href=""><i class="far fa-clock"></i>${date}</a>
                <a class="cn-title" href="elitesnews/${entryID}">${title}</a>
            </div>
          </div>
      </div>
    </div>
`;
  })
  .join("");
const nationalnewsContainer = document.querySelector(".nationalNews");
nationalnewsContainer.innerHTML= eachnationalnews;
// console.log(eachnationalnews)
}



// SPORTS DOM
const sportsDom = () =>{
  //mapping through each nationalnews array items
const eachsportsnews = sports[0]
.map((item) => {
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
  <div class="col-md-6">
  <div class="cn-img ">
  <img src="${photoUrl}" />
  <div class="cn-content">
      <div class="cn-content-inner">
          <a class="cn-date" href=""><i class="far fa-clock"></i>${date}</a>
          <a class="cn-title" href="elitesnews/${entryID}">${title}</a>
      </div>
  </div>
</div>
</div>
`;
})
.join("");
const sportsnewsContainer = document.querySelector(
".sportsNews"
);
sportsnewsContainer.innerHTML = eachsportsnews;
}


// BUSINESS DOM
const businessDom = () =>{
  //mapping through each nationalnews array items
const eachbusinessnews = business[0]
.map((item) => {
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
  <div class="col-md-6">
  <div class="cn-img ">
  <img src="${photoUrl}" />
  <div class="cn-content">
      <div class="cn-content-inner">
          <a class="cn-date" href=""><i class="far fa-clock"></i>${date}</a>
          <a class="cn-title" href="elitesnews/${entryID}">${title}</a>
      </div>
  </div>
</div>
</div>
`;
})
.join("");
const businessnewsContainer = document.querySelector(
".businessNews"
);
businessnewsContainer.innerHTML = eachbusinessnews;
}



// POLITICS DOM
const politicsDom = () =>{
  //mapping through each nationalnews array items
const eachpoliticalnews = politics[0]
.map((item) => {
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
  <div class="col-md-6">
  <div class="cn-img ">
  <img src="${photoUrl}" />
  <div class="cn-content">
      <div class="cn-content-inner">
          <a class="cn-date" href=""><i class="far fa-clock"></i>${date}</a>
          <a class="cn-title" href="elitesnews/${entryID}">${title}</a>
      </div>
  </div>
</div>
</div>
`;
})
.join("");
const politicsnewsContainer = document.querySelector(
".politicsNews"
);
politicsnewsContainer.innerHTML = eachpoliticalnews;
}


// LOCAL DOM
const localDom = () =>{
  //mapping through each nationalnews array items
const eachlocalnews = local[0]
.map((item) => {
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
  <div class="col-md-6">
  <div class="cn-img ">
  <img src="${photoUrl}" />
  <div class="cn-content">
      <div class="cn-content-inner">
          <a class="cn-date" href=""><i class="far fa-clock"></i>${date}</a>
          <a class="cn-title" href="elitesnews/${entryID}">${title}</a>
      </div>
  </div>
</div>
</div>
`;
})
.join("");
const localnewsContainer = document.querySelector(
".localNews"
);
localnewsContainer.innerHTML = eachlocalnews;
}



// ENTERTAINMENT Dom
const entertainmentDom = () =>{
  //mapping through each nationalnews array items
const eachlocalnews = entertainment[0]
.map((item) => {
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
  <div class="col-md-6">
  <div class="cn-img ">
  <img src="${photoUrl}" />
  <div class="cn-content">
      <div class="cn-content-inner">
          <a class="cn-date" href=""><i class="far fa-clock"></i>${date}</a>
          <a class="cn-title" href="elitesnews/${entryID}">${title}</a>
      </div>
  </div>
</div>
</div>
`;
})
.join("");
const localnewsContainer = document.querySelector(
".entertainmentNews"
);
localnewsContainer.innerHTML = eachlocalnews;
}



// HEALTH Dom
const healthDom = () =>{
  //mapping through each nationalnews array items
const eachlocalnews = health[0]
.map((item) => {
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
  <div class="col-md-6">
  <div class="cn-img ">
  <img src="${photoUrl}" />
  <div class="cn-content">
      <div class="cn-content-inner">
          <a class="cn-date" href=""><i class="far fa-clock"></i>${date}</a>
          <a class="cn-title" href="elitesnews/${entryID}">${title}</a>
      </div>
  </div>
</div>
</div>
`;
})
.join("");
const localnewsContainer = document.querySelector(".healthNews");
localnewsContainer.innerHTML = eachlocalnews;
}




// INTERNATIONAL Dom
const internationalDom = () =>{
  //mapping through each nationalnews array items
const eachlocalnews = international[0]
.map((item) => {
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
  <div class="col-md-6">
  <div class="cn-img ">
  <img src="${photoUrl}" />
  <div class="cn-content">
      <div class="cn-content-inner">
          <a class="cn-date" href=""><i class="far fa-clock"></i>${date}</a>
          <a class="cn-title" href="elitesnews/${entryID}">${title}</a>
      </div>
  </div>
</div>
</div>
`;
})
.join("");
const localnewsContainer = document.querySelector(".InternationalNews");
localnewsContainer.innerHTML = eachlocalnews;
}


// TOP Dom
const topNewsDom = () =>{
const eachlocalnews = topNews[0][0]
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
      <div class="tn-img">
        <img src="${photoUrl}" />
        <div class="tn-content">
          <div class="tn-content-inner">
            <a class="tn-date" href="elitesnews/${entryID}"><i class="far fa-clock"></i>${date}</a>
            <a class="tn-title" href="elitesnews/${entryID}">${title}</a>
          </div>
        </div>
      </div>
  `;

  const localnewsContainer = document.querySelector(".maintopStory");
  localnewsContainer.innerHTML = html;
}



// TOP Dom
const topNewsDom2 = () =>{
const eachlocalnews = topNews[0]
.map((item) => {
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
  <div class="col-md-6">
    <div class="tn-img">
      <img src="${photoUrl}" />
        <div class="tn-content">
          <div class="tn-content-inner">
            <a class="tn-date" href="/elitesnews/${entryID}"><i class="far fa-clock"></i>${date}</a>
            <a class="tn-title" href="/elitesnews/${entryID}">${title}</a>
          </div>
        </div>
    </div>
  </div>
`;
})
// .join("");
const localnewsContainer = document.querySelector(".other-top-stories");
localnewsContainer.innerHTML = eachlocalnews;
}



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
          <a class="mn-title" href="elitesnews/${entryID}">${title}</a>
          <a class="mn-date" href="elitesnews/${entryID}"><i class="far fa-clock"></i>${date}</a>
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
            <a class="mn-title" href="elitesnews/${entryID}"">${title}</a>
            <a class="mn-date" href="elitesnews/${entryID}"><i class="far fa-clock"></i>${date}</a>
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
  






// POPULAR SECTION
// POPULAR Dom
const popularNewsDom = () =>{
  //mapping through each nationalnews array items
const eachlocalnews = popularNews[0]
.map((item) => {
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
        <a class="mn-title" href="elitesnews/${entryID}">Manpower Audit: Police numbers down by 2,000</a>
        <a class="mn-date" href="elitesnews/${entryID}"><i class="far fa-clock"></i>${date}</a>
    </div>
  </div>
`;
})
.join("");
const localnewsContainer = document.querySelector(".popularNews-aside");
localnewsContainer.innerHTML = eachlocalnews;
}


// TOP POPULAR NEWS
const popularNewsDom2 = () =>{
  const eachlocalnews = popularNews[0][0]
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
            <a class="mn-title" href="elitesnews/${entryID}"">${title}</a>
            <a class="mn-date" href="elitesnews/${entryID}"><i class="far fa-clock"></i>${date}</a>
            <p class="shortdesc">
            </p>
        </div>
    `;
  
    const localnewsContainer = document.querySelector(".maintopPopular");
    localnewsContainer.innerHTML = html;

  const shortDesc = document.querySelector('.shortdesc')

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
  
