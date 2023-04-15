import { React, useState } from 'react'
import '../styles/SpeakerProfile.css'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RequestForm from './RequestForm';

export default function SpeakerProfile({ speakers }) {
  const { id } = useParams()
  const speaker = speakers.find(speaker => speaker.id === id)
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [nameForForm, setNameForForm] = useState("")

  const handleOpenRequestForm = () => {
    setShowRequestForm(true)
    setNameForForm(speaker.name)
  }

  const handleCloseRequestForm = () => {
    setShowRequestForm(false)
    setNameForForm(null)
  }

  console.log(speaker.name)

  const reviewElements = speaker.reviews.map((review, index) => (
    <div key={index} className="speakerProfile-review">
      <p className="speakerProfile-review-text">{review}</p>
    </div>
  ));

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5000 ms, eller 5 sekunder
  };

  const exampleLecturesElements = speaker.exampleLectures.map(exampleLecture => (
    <li><a>{exampleLecture}</a></li>
  ))

  return (
    <div className='speakerProfile'>
      <div className='speakerProfile-name-bookButton-container'>
        <h1 className='speakerProfile-header-name'>{speaker.name}</h1>
        <button className='book-speaker-button' onClick={handleOpenRequestForm}>{`Boka ${speaker.name}`}</button>
      </div>
      <div className='speakerProfile-content'>
        <div className='speakerProfile-image-name'>
          <div className='speakerProfile-image-container'>
            <img src={speaker.imgUrl} alt={speaker.name} className='speakerProfile-image' />
          </div>
          <div className='speakerProfile-reviews-container hide-on-mobile'>
            <h1 className='speakerProfile-reviews-header'>Vad andra säger</h1>
            <Slider {...sliderSettings}>
              {reviewElements}
            </Slider>
          </div>
        </div>
        <div className='speakerProfile-header-text'>
          <h1 className='speakerProfile-header-longDescription'>{speaker.header}</h1>
          <p className='speakerProfile-longDescription' dangerouslySetInnerHTML={{ __html: speaker.longDescription }}></p>
          <h1 className='speakerProfile-exampleLectures-header'>Exempelföreläsningar</h1>
          {exampleLecturesElements}
        </div>
        <div className='speakerProfile-reviews-container hide-on-desktop'>
          <h1 className='speakerProfile-reviews-header'>Vad andra säger</h1>
          <Slider {...sliderSettings}>
            {reviewElements}
          </Slider>
        </div>
      </div>
      {showRequestForm && <RequestForm
        handleCloseRequestForm={handleCloseRequestForm}
        nameForForm={nameForForm}
      />}
    </div>
  )
}
