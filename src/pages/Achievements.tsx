import { ImgStyled } from '../Styled';
import signableImage from '../assets/signable-image.jpeg';
import rhettSignable from '../assets/rhett-signable.jpeg';

export default function Achievements() {
    return (
        <>
            <h2>Achievements</h2>
            <div>
                <ImgStyled alt="Signable Student Invovator Award" src={signableImage}/>
                <p>One of my peronal projects got recognized through Boston Univeristy and we were invited to Boston Univeristy Innovator Night. At this event we were then presented with the Student Innovator award for creating Signable!</p>
            </div>
            <div>
                <ImgStyled alt="Teaching Rhett how to use Signable" src={rhettSignable}/>
                <p>We were also invited to panel at this event, where we got to teach everyone a bit of sign langauge. The highlight of the night was teaching Rhett how to sign his own name!</p>
            </div>
        </>
    )
}
