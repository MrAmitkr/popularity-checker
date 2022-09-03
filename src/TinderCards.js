import React, { useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
// import axios from './axios';

function TinderCards() {
   const [people, setPeople] = useState([
        {
            name: 'Hanzo',
            url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Hanzo.jpg?q=50&fit=crop&dpr=1.5"
        },
        {
            name: 'Hidan',
            url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Hidan.jpg?q=50&fit=crop&dpr=1.5"
        },
        {
            name: 'Kakuzu',
            url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Kakuzu.jpg?q=50&fit=crop&dpr=1.5"
        },
        {
            name: 'Deidara',
            url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Deidara.jpg?q=50&fit=crop&dpr=1.5"
        },
        {
            name: 'Kisame Hoshigaki',
            url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Kisame-Hoshigaki.jpg?q=50&fit=crop&dpr=1.5"
        },
        {
            name: 'Danzō Shimura',
            url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Danzo-Shimura.jpg?q=50&fit=crop&dpr=1.5"
        },
        {
            name: 'Zetsu',
            url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Zetsu.jpg?q=50&fit=crop&dpr=1.5"
        },
        {
            name: 'Kaguya Ōtsusuki',
            url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Kaguya-Otsusuki.jpg?q=50&fit=crop&dpr=1.5"
        },
        {
            name: 'Sasuke Uchiha',
            url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Sasuke-Uchiha.jpg?q=50&fit=crop&dpr=1.5"
        },
        {
            name: 'Obito Uchiha',
            url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Obito-Uchiha.jpg?q=50&fit=crop&dpr=1.5"
        },
        {
            name: 'Pain/Nagato',
            url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Pain.jpg?q=50&fit=crop&dpr=1.5"
        },
        {
            name: 'Orochimaru',
            url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Orochimaru.jpg?q=50&fit=crop&dpr=1.5"
        },
        {
            name: 'Itachi Uchiha',
            url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Itachi-Uchiha.jpg?q=50&fit=crop&dpr=1.5"
        },
        {
            name: 'Madara Uchiha',
            url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/11/Naruto-Madara-Uchiha.jpg?q=50&fit=crop&dpr=1.5"
        }
     
    ]);




/*     const [people, setPeople] = useState([])

    useEffect(()=> {
      async function fetchData() {
        const req = await axios.get('./tinder/cards');
        setPeople(req.data);
      }
      fetchData();
    },[])
    
 */
    const swiped = (direction, nameToDelete) =>{
        console.log("removing" + nameToDelete);
    //    setLastDirection(direction);
    };

    const outOfFrame = (name)=>{
        console.log(name+"left the screen");
    }


  return (
    <div className='tinderCards'>
    <div className="tinderCards__cardContainer">
    {people.map((person) => (
      <TinderCard
      className='swipe'
      key={person.name}
      prevenetSwipe={["up",'down']}
      onSwipe={(dir)=> swiped(dir, person.name)}
      onCardLeftScreen={() => outOfFrame(person.name)}
      >
      <div 
          style={{backgroundImage:"url(" + person.url + ")"}} className="card">
             <h3>{person.name}</h3>


      </div>
   




      </TinderCard>
    ))}
    </div>
    </div>
  )
}

export default TinderCards