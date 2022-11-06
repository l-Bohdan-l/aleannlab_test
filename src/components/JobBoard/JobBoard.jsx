import {MdLocationOn} from 'react-icons/md';
import img from '../../img/person1.jpg';
export function JobBoard() {
    return (
        <div>
            <ul>
                <li>
                    <img src={img} alt="company logo" width='329'/>
                    <div>
                        <span>stars</span>
                        <span>posted 2 days ago</span>
                    </div>
                    <h2>Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d)</h2>
                    <p>Department name • Allgemeines Krankenhaus der Stadt Wien - AKH</p>
                    <span><MdLocationOn/> Vienna, Austria</span>
                </li>
            </ul>
        </div>
    )
}