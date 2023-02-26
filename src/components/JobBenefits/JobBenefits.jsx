import { nanoid } from "nanoid";
import { BenefitsList } from "../JobDetail/JobDetailed.styled";

export function JobBenefits({ benefits }) {
    return (       
        <BenefitsList>
            {benefits.map((benefit) => (
                <li key={nanoid()}>{benefit}</li>
            ))}
        </BenefitsList>      
    );
}