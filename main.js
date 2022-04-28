const pets = [
  {
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl:
      "https://s3.amazonaws.com/mountainlake.org/wp-content/uploads/2022/03/23132850/dinosaur-5414593_1920-1155x770.jpg",
  },
  {
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl:
      "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
  },
  {
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl:
      "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
  },
  {
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl:
      "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
  },
  {
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
  },
  {
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
  },
  {
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl:
      "https://www.jsg.utexas.edu/vpl/files/Dilophosaurus-Puppet-Profile-mouth-closed-768x549.jpg",
  },
  {
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
  },
  {
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
  },
  {
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/WARVeCHKWLEaoNY8grVkoR-970-80.jpg",
  },
  {
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
  },
  {
    name: "Chester",
    color: "Red",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl:
      "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg",
  },
  {
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl:
      "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
  },
  {
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl:
      "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
  },
  {
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl:
      "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190828152336-07-western-us-dinosaur-road-trip.jpg",
  },
  {
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl:
      "https://cdn.images.express.co.uk/img/dynamic/1/590x/Are-you-available-to-pet-a-cat-file-image-1581513.webp?r=1647435124825",
  },
  {
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/cfeEKYjunpXkYvFZy2SMmm-970-80.jpg.webp",
  },
  {
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl:
      "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg",
  },
  {
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/34/2021/09/27/black-cat-kitchen-rug-getty-0921-2000.jpg",
  },
  {
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl:
      "https://imgix.bustle.com/inverse/d6/07/53/b5/86bb/43b5/9b48/7a59522acb30/dinosaur-chicken-hybrid.png?w=2000&h=1090&fit=crop&crop=faces&auto=format%2Ccompress&blend=000000&blendAlpha=45&blendMode=normal",
  },
  {
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl:
      "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=550px:*&output-quality=50",
  },
  {
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
  },
  {
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl:
      "https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2021/12/shutterstock_787975687-1.jpg",
  },
  {
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UFN7EHE2Z4I6ZGMHTXHO4YVD6Y.jpg&w=916",
  },
  {
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
  },
  {
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
  },
  {
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
  },
  {
    name: "Oscar",
    color: "Green",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl:
      "https://c.ndtvimg.com/2019-09/28kahvq8_dinosaur-japan_625x300_06_September_19.jpg",
  },
];
// *********  UTILITY FUNCTIONS  ********* //

const renderToDom = (divId, textToRender) => {
  const selectElement = document.querySelector(divId);
  selectElement.innerHTML = textToRender;
};

const addIndex = () => {
  pets.forEach((item, index) => {
    item.id = (index + 1).toString();
  });
};
// *********  HTML COMPONENT FUNCTIONS  ********* //
const source = () => {
  const domString = `<div id="main">
<div id="filterBtn" class="buttoncontainer">
  <button id="cat" type="button" class="btn btn-secondary btn-lg">Cats</button>
  <button id="dog" type="button" class="btn btn-secondary btn-lg">Dogs</button>
  <button id="dino" type="button" class="btn btn-secondary btn-lg">Dinos</button>
  <button id="allBtn" type="button" class="btn btn-secondary btn-lg">All</button>
</div>
<div id="createBtnContainer"></div>
<div id="pets-div" class="card-container"></div>
</div>`;
  renderToDom("#source", domString);
};

const addPetModal = () => {
  const modalBtn = `<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-pet">
  Put Your Pet Up for Adoption
</button>

<!-- Modal -->
<div class="modal fade" id="add-pet" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Put A Pet Up for Adoption</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body" id="modal-body">
      <form>
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Pet Name" id="name" required>
            <label for="name">Pet Name</label>
          </div>
      
          <div class="form-floating mb-3">
            <input class="form-control form-control-lg" type="text" placeholder="Pet Color" id="color" required>
            <label for="color">Color</label>
          </div>

          <div class="form-floating">
            <textarea class="form-control" placeholder="Special Skills" id="specialSkill" style="height: 100px"></textarea>
            <label for="specialSkill">Special Skills</label>
          </div>
      
          <div class="form-floating mb-3">
          <select class="form-select" form-control-lg" id="type" required>
            <option selected>Select Type of Animal</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="dino">Dino</option>
          </select>
          <label for="type">Select Type of Animal</label>
          </div>
      
          

          <label for="basic-url" class="form-label"></label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">Link Pet Pic URL</span>
            <input type="text" class="form-control" id="imageUrl" for="imageUrl">
          </div>

          <button type="submit" class="btn btn-success">
            Submit
          </button>
          
        </form>
      </div>
    </div>
  </div>
</div>`;
  renderToDom("#createBtnContainer", modalBtn);
};

const cardsOnDom = (array) => {
  let domString = "";
  for (const pet of array) {
    domString += `<div class="card" style="width: 18rem;">
    <h5 class="card-header d-flex justify-content-between align-items-center">
    ${pet.name}
  <button id="delete--${pet.id}" type="button" class="btn btn-sm btn-outline-danger">X</button>
</h5>
  <img src="${pet.imageUrl}" class="card-img-top" alt="${pet.type}">
  <div class="card-body">
    
    <p class="card-text">${pet.specialSkill}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${pet.color}</li>
    <li class="list-group-item">${pet.type}</li>
    <li id="petId" class="list-group-item">${pet.id}</li>
    <li class="list-group-item"><button id="adopt" type="button" class="btn btn-block btn-primary">Adopt!</button></li>
  </ul>
</div>`;
  }
  renderToDom("#pets-div", domString);
};

// *********  EVENT LISTENERS  *********  //

const eventListeners = () => {
  const formModal = new bootstrap.Modal(document.querySelector("#add-pet"));

  document.querySelector;

  document.querySelector("#filterBtn").addEventListener("click", (e) => {
    if (e.target.id === "allBtn") {
      cardsOnDom(pets);
    } else if (e.target.id) {
      const typeOfAnimal = pets.filter((animal) => animal.type === e.target.id);
      cardsOnDom(typeOfAnimal);
    }
  });

  // BUTTONS ON CARDS

  document.querySelector("#pets-div").addEventListener("click", (e) => {
    if (e.target.id) {
      const [method, petId] = e.target.id.split("--");
      const index = pets.findIndex((idOfPet) => idOfPet.id === petId);
      if (e.target.id.includes("delete")) {
        pets.splice(index, 1);
        cardsOnDom(pets);
      }
    }
  });

  // FORM SUBMIT
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newPetObj = {
      name: document.querySelector("#name").value,
      color: document.querySelector("#color").value,
      specialSkill: document.querySelector("#specialSkill").value,
      type: document.querySelector("#type").value,
      imageUrl: document.querySelector("#imageUrl").value,
    };
    pets.push(newPetObj);
    addIndex();
    cardsOnDom(pets);
    formModal.hide();
    form.reset();
  });
};

// *********  FUNCTION TO START APPLICATION  *********  //
const startApp = () => {
  addIndex();
  source();
  addPetModal();
  cardsOnDom(pets);
  eventListeners();
};
startApp();
