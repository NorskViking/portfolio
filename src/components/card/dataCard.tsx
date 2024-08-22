import { title } from "process";
import React from "react";
import { Card } from "react-bootstrap";

interface DataCardProps {
    id: number;
    company?: string;
    title: string;
    description: string;
    startDate?: string;
    endDate?: string;
    year?: number;
    logo?: string;
}

const DataCard: React.FC<DataCardProps> = ({ id, company, title, description, startDate, endDate, year, logo }) => {
    return (
        <Card key={id} className="data-card mb-4 shadow-sm">
            {logo && (

                <Card.Img 
                    variant="top"
                    src={logo}
                    className="data-card-logo"
                    alt={`${title} logo`}
                />
            )}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {company && <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>}
                <Card.Subtitle className="mb-2 text-muted">
                    {startDate && endDate ? `${startDate} - ${endDate}` : year}
                </Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default DataCard;