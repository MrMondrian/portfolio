import React, {useState} from 'react'
import './awards.css'
import Award from '../award/award'

const award1 = {
    title: 'Best Paper Award',
    when: 'September 2021',
    location: 'International Conference on the Foundations of Digital Games',
    bullets: ['Awarded “Best Paper” to paper presented']
}

const award2 = {
    title: 'NSERC Research Grant',
    when: 'May 2021',
    location: 'National Science and Research Council of Canada',
    bullets: ['Awarded $8000 assist to in research at the University of Manitoba Bioinformatics Lab\
    Summer 2021','Research supervised by Dr. Olivier Tremblay-Savard']
}

const award3 = {
    title: 'UMSU Undergraduate Research Award',
    when: 'May 2020',
    location: 'National Science and Research Council of Canada',
    bullets: ['Awarded $7000 assist in research at the University of Manitoba Bioinformatics Lab Summer\
    2020','Research supervised by Dr. Olivier Tremblay-Savard']
}

const award4 = {
    title: 'University of Manitoba President\’s Scholarship',
    when: 'September 2019, 2020, 2021 (declined)',
    location: 'University of Manitoba',
    bullets: ['Awarded for high academic achievement']
}

const award5 = {
    title: 'University of Manitoba Retention Scholarships',
    when: 'October 2020',
    location: 'University of Manitoba',
    bullets: ['Awarded for maintaining a high GPA throughout first two years of undergrad']
}

const award6 = {
    title: 'Univeristy of Mantioba Entrance Scholarship – Tier 1',
    when: 'September 2019',
    location: 'University of Manitoba',
    bullets: ['Awarded for high academic achievement in high school']
}

const award7 = {
    title: 'Bell MTS Scholarships',
    when: 'October 2021 (declined because of univeristy transfer)',
    location: 'University of Manitoba',
    bullets: ['Awarded for high academic achievement']
}


const award8 = {
    title: 'Univeristy of Manitoba Students Union Scholarship',
    when: 'July 2021 (declined because of univeristy transfer)',
    location: 'University of Manitoba',
    bullets: ['Awarded for high academic achievement']
}


const data = [award1, award2, award3, award4, award5, award6, award7, award8]

const Awards = () => {

  const [seeMore, setSeeMore] = useState(false)
  const [awards,setAwards] = useState(data.slice(0,4))
  const changeView = () => {
    console.log('here')
    if(seeMore) {
       setAwards(data.slice(0,4))
    }
    else {
        setAwards(data)
    }
    setSeeMore(!seeMore)
  }
  return (
    <section id="awards">
        <div className='awards_container'>
            <h2>Awards</h2>
            <div className="awards_list_container">
                <div className="awards_list">
                    {
                        awards.map((datum,index)=> {
                            return <Award index={index}{...datum}/>
                        })
                    }
                    <div className='seemore'>
                        {!seeMore ? <button onClick={changeView}>see more</button> : <button onClick={changeView}>see less</button>}
                    </div> 
                </div>  
            </div>
        </div>
    </section>
  )
}

export default Awards