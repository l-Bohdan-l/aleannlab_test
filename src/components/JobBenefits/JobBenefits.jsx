import { nanoid } from "nanoid";
import { BenefitsList, BenefitsListItem } from "./JobBenefits.styled";

export function JobBenefits({ benefits }) {
    return (       
        <BenefitsList>
            {benefits.map((benefit) => (
                <BenefitsListItem key={nanoid()}>{benefit}</BenefitsListItem>
            ))}
        </BenefitsList>      
    );
}