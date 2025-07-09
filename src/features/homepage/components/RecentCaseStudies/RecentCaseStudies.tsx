import React from 'react';

interface CaseStudy {
    id: string;
    title: string;
    summary: string;
    imageUrl?: string;
}

interface RecentCaseStudiesProps {
    caseStudies?: CaseStudy[];
}

const RecentCaseStudies: React.FC<RecentCaseStudiesProps> = ({ caseStudies = [] }) => {
    return (
        <section>
            <h2>Recent Case Studies</h2>
            <div>
                {caseStudies.length === 0 ? (
                    <p>No case studies available.</p>
                ) : (
                    <ul>
                        {caseStudies.map((caseStudy) => (
                            <li key={caseStudy.id}>
                                {caseStudy.imageUrl && (
                                    <img src={caseStudy.imageUrl} alt={caseStudy.title} style={{ width: '100px' }} />
                                )}
                                <h3>{caseStudy.title}</h3>
                                <p>{caseStudy.summary}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default RecentCaseStudies;