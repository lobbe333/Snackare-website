import { React, useState, useEffect } from 'react'
import Card from './Card'
import '../styles/Speakers.css'
import { Link, useLocation } from 'react-router-dom'

export default function Speakers({ speakers, category, speakersHeader }) {
    const [search, setSearch] = useState("")

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    function translateRoleToSwedish(role) {
        const translations = {
            'entertainer': 'underhållare',
            'lecturer': 'föreläsare',
            'moderator': 'moderator'
        };

        return translations[role] || role;
    }


    const filteredSpeakers = speakers.filter((speaker) => {
        const activeRoles = speaker.roles ?
            Object.entries(speaker.roles).filter(([role, hasRole]) => hasRole).map(([role, hasRole]) => role) : []

        const isMatchCategory = !category || activeRoles.includes(category)

        const searchLowerCase = search.toLowerCase();

        const isMatchSearch = speaker.name.toLowerCase().includes(searchLowerCase) ||
            (speaker.topics && speaker.topics.some(topic => topic.toLowerCase().includes(searchLowerCase))) ||
            (speaker.roles && Object.entries(speaker.roles).some(([role, hasRole]) => hasRole && translateRoleToSwedish(role).toLowerCase().includes(searchLowerCase)))

        return isMatchCategory && isMatchSearch
    })

    const sortedSpeakers = filteredSpeakers.sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    function renderSortedCardElements() {
        let currentLetter = '';
        const elements = [];

        sortedSpeakers.forEach((speaker) => {
            const firstLetter = speaker.name[0].toUpperCase();

            if (firstLetter !== currentLetter) {
                currentLetter = firstLetter;
                elements.push(
                    <div className='letter-section' key={`letter-${currentLetter}`}>
                        <h1 className='letter'>{currentLetter}</h1>
                    </div>
                );
            }

            elements.push(
                <div>
                    <Link key={speaker.id} to={`/speaker/${speaker.id}`}>
                        <Card speaker={speaker} />
                    </Link>
                </div>
            );
        });

        return elements;
    }

    return (
        <div>
            <div className="header-search-container">
                <div className='headers-container'>
                    <h1 className='speakers-header'>{speakersHeader ? speakersHeader : "Alla Snackare"}</h1>
                    <h2 className='speakers-search-header'>Sök efter: {search}</h2>
                </div>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Sök"
                    value={search}
                    onChange={handleSearch}
                />
            </div>
            <div className="card-section">
                {renderSortedCardElements()}
            </div>
        </div >
    );
}
