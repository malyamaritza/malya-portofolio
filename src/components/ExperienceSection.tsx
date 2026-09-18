import orgsData from '../data/organizations.json';
import { OrganizationExperience } from '../types';

const organizations = orgsData as OrganizationExperience[];

export default function ExperienceSection() {
    return (
        <section id="experience" className="scroll-mt-6 pt-6">
            <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="inline-block bg-garden-moss text-garden-cream font-mono text-xs font-bold uppercase px-3 py-1 rounded-md shadow-sm mb-2">
                    Leadership &amp; Contributions
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-garden-dark">
                    Organizational Experience &amp; Involvements
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans">
                    Dedicated to fiscal governance, international benchmarking, and technology community building.
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {organizations.map((org) => {
                    // Determine period badge color styling
                    let periodBadgeClass = 'bg-garden-pastel text-garden-dark';
                    if (org.periodBadgeColor === 'peach') {
                        periodBadgeClass = 'bg-garden-peachLight text-garden-terracotta';
                    } else if (org.periodBadgeColor === 'pond') {
                        periodBadgeClass = 'bg-garden-pondLight text-slate-700';
                    }

                    // Determine washi tape class
                    const washiClass =
                        org.washiColor === 'green' ? 'washi-tape-green' : 'washi-tape-peach';

                    return (
                        <div
                            key={org.id}
                            className="bg-white border-2 border-garden-sage rounded-2xl p-5 shadow-scrapbook relative hover:shadow-md transition-shadow"
                        >
                            {/* Tape Accent */}
                            <div
                                className={`absolute -top-3 ${org.id.includes('onelsh') || org.id.includes('community')
                                        ? 'right-6'
                                        : 'left-6'
                                    } w-20 h-5 ${washiClass} ${org.washiRotation} rounded-sm border-dashed border border-garden-moss/30 pointer-events-none`}
                            ></div>

                            <div className="flex items-start justify-between">
                                <div>
                                    <span
                                        className={`text-[11px] font-mono px-2 py-0.5 rounded font-bold ${periodBadgeClass}`}
                                    >
                                        {org.period}
                                    </span>
                                    <h3 className="text-base font-bold text-garden-dark mt-1.5">
                                        {org.organization}
                                    </h3>
                                    <p className="text-xs font-semibold text-garden-sage">
                                        {org.role}
                                    </p>
                                </div>
                                <span className="text-2xl select-none">{org.icon}</span>
                            </div>

                            <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                                {org.description}
                            </p>

                            <div className="mt-3.5 flex flex-wrap gap-1.5 text-[10px] font-mono text-garden-dark">
                                {org.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-garden-sand border border-garden-sage/30 px-2 py-0.5 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
