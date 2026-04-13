<?php
/**
 * Theme data sets used across templates.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

function pps_service_url(string $primary_slug, ?string $legacy_slug = null): string
{
    $candidates = array_values(array_filter(array_unique([$primary_slug, $legacy_slug])));

    foreach ($candidates as $candidate) {
        $page = get_page_by_path('services/' . $candidate, OBJECT, 'page');
        if ($page) {
            $permalink = get_permalink($page);
            if (is_string($permalink) && '' !== $permalink) {
                return $permalink;
            }
        }
    }

    return home_url('/services/' . $primary_slug . '/');
}

function pps_service_slug_aliases(): array
{
    return [
        'site-surveys' => 'maintenance-health-checks',
        'maintenance-health-checks' => 'maintenance-health-checks',
        'emergency-lighting' => 'ups-sales-supply-only',
        'ups-sales-supply-only' => 'ups-sales-supply-only',
        'electrical-installation' => 'ups-removal-disposal',
        'ups-removal-disposal' => 'ups-removal-disposal',
        'full-installation' => 'ups-installation',
        'ups-installation' => 'ups-installation',
        'ups-battery-replacement' => 'ups-battery-replacement',
        'equipment-relocation' => 'equipment-relocation',
    ];
}

function pps_normalize_service_slug(string $slug): string
{
    $aliases = pps_service_slug_aliases();
    return $aliases[$slug] ?? $slug;
}

function pps_services_data(): array
{
    static $data = null;

    if (is_array($data)) {
        return $data;
    }

    $data = [
        [
            'title' => 'UPS Sales & Supply Only',
            'hero_title' => 'UPS Sales & Supply Only',
            'slug'  => 'ups-sales-supply-only',
            'href'  => pps_service_url('ups-sales-supply-only', 'emergency-lighting'),
            'description' => 'Independent UPS product supply with practical specification advice for direct procurement projects.',
            'image' => 'services/services-standby.jpg',
            'image_alt' => 'Critical power infrastructure used in emergency backup systems',
            'highlights' => [
                'UPS model selection based on load and runtime needs',
                'Supply-only options across major UPS manufacturers',
                'Clear technical guidance for procurement and handover',
            ],
        ],
        [
            'title' => 'UPS Installation',
            'hero_title' => 'UPS Installation',
            'slug'  => 'ups-installation',
            'href'  => pps_service_url('ups-installation', 'full-installation'),
            'description' => 'Complete end-to-end delivery from survey and design through installation, commissioning, and handover.',
            'image' => 'services/services-full-installation.jpg',
            'image_alt' => 'Technician installing power protection systems on site',
            'highlights' => [
                'Survey, design, supply, and installation',
                'Commissioning and acceptance testing',
                'Documentation and operational handover',
            ],
        ],
        [
            'title' => 'Maintenance & Health Checks',
            'hero_title' => 'Maintenance & Health Checks',
            'slug'  => 'maintenance-health-checks',
            'href'  => pps_service_url('maintenance-health-checks', 'site-surveys'),
            'description' => 'Planned maintenance and detailed health checks to keep UPS systems reliable, safe, and ready.',
            'image' => 'services/services-site-surveys.jpg',
            'image_alt' => 'Site assessment taking place in a commercial environment',
            'highlights' => [
                'Scheduled service visits and preventive maintenance',
                'Runtime, load, and component condition checks',
                'Clear reporting with prioritised next-step actions',
            ],
        ],
        [
            'title' => 'UPS Battery Replacement',
            'hero_title' => 'UPS Battery Replacement',
            'slug'  => 'ups-battery-replacement',
            'href'  => pps_service_url('ups-battery-replacement'),
            'description' => 'Battery testing, supply, and replacement to protect runtime and overall UPS reliability.',
            'image' => 'services/services-batteries.jpg',
            'image_alt' => 'UPS battery system components and power infrastructure',
            'highlights' => [
                'Battery health checks and condition reporting',
                'Scheduled and reactive replacement',
                'Performance validation after installation',
            ],
        ],
        [
            'title' => 'UPS Removal & Disposal',
            'hero_title' => 'UPS Removal & Disposal',
            'slug'  => 'ups-removal-disposal',
            'href'  => pps_service_url('ups-removal-disposal', 'electrical-installation'),
            'description' => 'Safe decommissioning, removal, and compliant disposal of legacy UPS systems and related hardware.',
            'image' => 'services/services-electrical-installation.jpg',
            'image_alt' => 'Commercial electrical installation works in progress',
            'highlights' => [
                'Planned shutdown and decommissioning support',
                'Safe removal and site-clearance coordination',
                'Responsible disposal aligned with UK compliance requirements',
            ],
        ],
        [
            'title' => 'Equipment Relocation',
            'hero_title' => 'Equipment Relocation',
            'slug'  => 'equipment-relocation',
            'href'  => pps_service_url('equipment-relocation'),
            'description' => 'Safe de-commissioning, transport, and re-commissioning for UPS and related critical equipment.',
            'image' => 'services/services-relocation-pexels-2804929.jpg',
            'image_alt' => 'Logistics and transport planning for equipment relocation',
            'highlights' => [
                'Planned de-commissioning and move sequencing',
                'Secure transport and controlled re-installation',
                'Post-move testing and handover support',
            ],
        ],
    ];

    return $data;
}

function pps_get_service_by_slug(string $slug): ?array
{
    $normalized_slug = pps_normalize_service_slug($slug);

    foreach (pps_services_data() as $service) {
        if (($service['slug'] ?? '') === $normalized_slug) {
            return $service;
        }
    }

    return null;
}

function pps_sector_data(): array
{
    static $data = null;

    if (is_array($data)) {
        return $data;
    }

    $data = [
        [
            'title' => 'Small and Medium Businesses',
            'hero_title' => 'Small and Medium Businesses',
            'hero_description' => "Keep your business running when the power doesn't",
            'slug'  => 'medium-business',
            'href'  => home_url('/who-can-we-help/medium-business/'),
            'image' => 'sectors/smb-proxyclick-2451566.jpg',
            'image_alt' => 'Medium business office environment',
            'description' => 'Right-sized UPS protection for SMEs that need reliable day-to-day uptime without unnecessary complexity.',
            'highlights' => [
                'Protects servers, gateways, storage, VoIP and other critical business systems',
                'Helps reduce downtime, data loss and disruption to day-to-day operations',
                'Scales with growth from single office setups to wider multi-site SME environments',
            ],
            'blocks' => [
                [
                    'type' => 'paragraph',
                    'text' => 'Modern small and medium-sized businesses rely on a distributed network of technology - rack-mount servers, internet gateways, storage systems, VoIP telephony, and more. Unlike the single central computer of the past, today\'s infrastructure is spread across multiple technical environments, many of which require continuous, stable power around the clock.',
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'A single power interruption can bring operations to a halt, corrupt critical data, damage hardware, and in the worst cases take hours or days to fully recover from. For a growing business, that kind of downtime has a direct impact on revenue, reputation, and customer confidence.',
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'UPS Power Keeper supplies and installs UPS solutions scaled for small and medium business environments - robust enough to protect your infrastructure, flexible enough to grow with your organisation. From initial site survey through to installation, commissioning, and ongoing maintenance, we manage the entire process so you do not have to.',
                ],
                [
                    'type' => 'heading',
                    'text' => 'What we protect:',
                ],
                [
                    'type' => 'list',
                    'items' => [
                        'Rack-mount servers and data storage systems',
                        'Internet gateways and network infrastructure',
                        'VoIP and communications systems',
                        'Building management and security systems',
                        'Any equipment requiring continuous, stable power',
                    ],
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'Power problems do not announce themselves. Make sure your business is ready when they arrive.',
                ],
            ],
        ],
        [
            'title' => 'Coorporate Organisations',
            'hero_title' => 'Coorporate Organisations',
            'hero_description' => 'Enterprise-grade power protection, without compromise',
            'slug'  => 'corporate',
            'href'  => home_url('/who-can-we-help/corporate/'),
            'image' => 'sectors/corporate-divinetechygirl-1181406.jpg',
            'image_alt' => 'Corporate office and enterprise operations',
            'description' => 'Enterprise-grade power protection for data centres, business-critical services and multi-site operations.',
            'highlights' => [
                'Built for enterprise infrastructure resilience across corporate environments',
                'Turnkey delivery from survey and design through installation and commissioning',
                '24/7 support and maintenance options with guaranteed response models',
            ],
            'blocks' => [
                [
                    'type' => 'paragraph',
                    'text' => 'For corporate organisations, the data centre is the beating heart of the business. Every network connection, every remote user, every transaction, and every customer interaction depends on it running without interruption. At this scale, even a brief power event can cascade rapidly - affecting operations across multiple sites, disrupting thousands of users, and resulting in significant financial and reputational damage.',
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'The stakes are too high for a reactive approach. Corporate infrastructure demands power protection that is properly specified, professionally installed, and actively maintained - with support available whenever it is needed, 24 hours a day, 365 days a year.',
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'UPS Power Keeper works with corporate organisations to design and deliver power protection solutions built around the specific demands of enterprise infrastructure. As an independent supplier, we are not tied to any single manufacturer - which means we recommend the solution that is genuinely right for your environment, not the one that is easiest to sell.',
                ],
                [
                    'type' => 'heading',
                    'text' => 'What we deliver for corporate clients:',
                ],
                [
                    'type' => 'list',
                    'items' => [
                        'Power protection solutions scaled for data centre and enterprise environments',
                        'Full turnkey service from site survey and design through to installation and commissioning',
                        'Ongoing maintenance contracts with guaranteed response times',
                        '24/7/365 monitoring and support',
                        'Independent, multi-brand product sourcing - always the right solution, never a compromise',
                    ],
                ],
            ],
        ],
        [
            'title' => 'Government and Local Council',
            'hero_title' => 'Government and Local Council',
            'hero_description' => 'Reliable power protection for critical public services',
            'slug'  => 'government-and-local-council',
            'href'  => home_url('/who-can-we-help/government-and-local-council/'),
            'image' => 'sectors/local-government-fotios-2130031.jpg',
            'image_alt' => 'Government and local council civic buildings',
            'description' => 'Reliable power protection for councils, government departments and critical public services.',
            'highlights' => [
                'Support for council offices, civic sites and essential public service operations',
                'Delivery aligned with public sector governance, audit and procurement expectations',
                'Full lifecycle support from design and installation through long-term maintenance',
            ],
            'blocks' => [
                [
                    'type' => 'paragraph',
                    'text' => 'Government bodies and local councils carry a unique responsibility - the people and services that depend on them cannot afford disruption. From council IT systems and emergency service infrastructure to civic administration platforms and public health coordination, the consequences of power failure extend well beyond inconvenience.',
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'Procurement in the public sector also comes with its own demands: compliance requirements, value-for-money obligations, audit trails, and the need for suppliers who understand how to work within established frameworks and processes.',
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'UPS Power Keeper provides a full lifecycle power protection service - from initial consultation and system design through to installation, commissioning, and long-term maintenance. We work with a wide range of government departments and local authorities across the UK, delivering solutions that meet both the technical demands of the environment and the governance requirements of the organisation.',
                ],
                [
                    'type' => 'heading',
                    'text' => 'Organisations we work with:',
                ],
                [
                    'type' => 'list',
                    'items' => [
                        'Local councils and unitary authorities',
                        'Central government departments',
                        'Public service agencies',
                        'Emergency services',
                        'NHS and public health bodies',
                        'Public sector IT and data infrastructure',
                    ],
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'Power protection that serves the public interest - specified, installed, and maintained to the standards that public sector organisations require.',
                ],
            ],
        ],
        [
            'title' => 'Universities and Education',
            'hero_title' => 'Universities and Education',
            'hero_description' => 'Reliable power protection for schools, colleges, universities, and campus infrastructure',
            'slug'  => 'universities-and-education',
            'href'  => home_url('/who-can-we-help/universities-and-education/'),
            'image' => 'sectors/universities-ollie-8793386.jpg',
            'image_alt' => 'Universities and education campus buildings',
            'description' => 'Reliable power protection for schools, colleges and universities with critical teaching, research and campus IT systems.',
            'highlights' => [
                'Support for campus networks, labs, server rooms and lecture facilities',
                'Resilience planning for mixed legacy and modern learning infrastructure',
                'Ongoing maintenance and battery replacement to reduce disruption during term time',
            ],
            'blocks' => [
                [
                    'type' => 'paragraph',
                    'text' => 'Education environments depend on always-on technology. From classroom delivery and campus Wi-Fi to data platforms, access control, and research systems, power interruptions can quickly disrupt teaching, administration, and student services.',
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'Whether you are managing a single school site or a multi-building university estate, resilience planning needs to balance compliance, budget, and practical uptime requirements across mixed legacy and modern infrastructure.',
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'UPS Power Keeper provides independent UPS design, supply, installation, and maintenance services tailored to education settings. We help you protect critical systems, reduce disruption, and keep your operations running during unstable mains events.',
                ],
                [
                    'type' => 'heading',
                    'text' => 'Education environments we support:',
                ],
                [
                    'type' => 'list',
                    'items' => [
                        'Primary and secondary schools',
                        'Further education colleges',
                        'Universities and research institutions',
                        'Campus IT and communications infrastructure',
                        'Administration, security, and access-control systems',
                        'Teaching spaces, labs, and specialist facilities',
                    ],
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'Practical power protection for education organisations that cannot afford unnecessary downtime.',
                ],
            ],
        ],
        [
            'title' => 'Telecoms Business',
            'hero_title' => 'Telecoms Business',
            'hero_description' => 'When network uptime is non-negotiable',
            'slug'  => 'telecoms-business',
            'href'  => home_url('/who-can-we-help/telecoms-business/'),
            'image' => 'sectors/it-cookiecutter-17489156.jpg',
            'image_alt' => 'Telecoms and communications infrastructure',
            'description' => 'Technical support for IT resellers and contractors delivering telecoms and network-critical power projects.',
            'highlights' => [
                'Assistance from specification and sizing through to commissioning and handover',
                'Support for network operations centres, telecoms infrastructure and remote sites',
                'UPS, inverter, battery replacement and support options built for uptime',
            ],
            'blocks' => [
                [
                    'type' => 'paragraph',
                    'text' => 'Telecoms infrastructure operates under some of the most demanding power requirements of any industry. Networks must stay live around the clock - any interruption, however brief, can affect thousands of users and trigger contractual, regulatory, and reputational consequences.',
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'Telecoms environments typically combine DC-powered battery banks with AC-powered equipment - servers, storage systems, routers, and inverters - each with specific power supply requirements. As networks continue to evolve through 5G rollout and expanding base station infrastructure, the complexity and criticality of power protection requirements grows with them.',
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'UPS Power Keeper supplies and installs UPS systems and inverters configured for the specific demands of telecoms environments - from network operations centres and server rooms to remote base stations and exchange buildings. Our independence from any single manufacturer means we can source and specify the most appropriate solution for your infrastructure, whatever the scale.',
                ],
                [
                    'type' => 'heading',
                    'text' => 'What we provide for telecoms:',
                ],
                [
                    'type' => 'list',
                    'items' => [
                        'UPS systems and inverters for AC-powered telecoms equipment',
                        'Power protection for base stations and remote network sites',
                        'Scalable solutions for network operations centres',
                        'Ongoing maintenance and 24/7 support contracts',
                        'Battery replacement and health check programmes',
                    ],
                ],
            ],
        ],
        [
            'title' => 'Healthcare and NHS',
            'hero_title' => 'Healthcare and NHS',
            'hero_description' => 'Power protection where failure is simply not an option',
            'slug'  => 'healthcare-and-nhs',
            'href'  => home_url('/who-can-we-help/healthcare-and-nhs/'),
            'image' => 'sectors/hospitals-contact-13176450.jpg',
            'image_alt' => 'Healthcare and NHS clinical environment',
            'description' => 'Power protection where failure is simply not an option in healthcare and NHS environments.',
            'highlights' => [
                'Support for theatres, emergency rooms, labs, imaging and patient monitoring systems',
                'Specified for healthcare standards including HTM, BS7671 and IEC60601 applications',
                'Medical-grade UPS options and resilient backup architecture for continuous operation',
            ],
            'blocks' => [
                [
                    'type' => 'paragraph',
                    'text' => 'In healthcare environments, power protection is not an operational convenience - it is a clinical necessity. Medical UPS systems, batteries, and switchgear must adhere to strict regulations and operating standards specific to the healthcare sector, covering everything from patient vicinity leakage current limits to failsafe redundancy requirements.',
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'UPS Power Keeper has extensive experience delivering medical-grade UPS solutions across the NHS and private healthcare sector. Our knowledge of the operational demands, compliance requirements, and clinical sensitivities of this environment sets us apart from generalist suppliers.',
                ],
                [
                    'type' => 'heading',
                    'text' => 'Our protection extends across the full breadth of healthcare infrastructure:',
                ],
                [
                    'type' => 'list',
                    'items' => [
                        'Operating theatres and emergency rooms',
                        'Operating theatre backup power and lighting',
                        'Clinical laboratory equipment',
                        'Patient monitoring systems',
                        'Diagnostic devices and mobile apparatus',
                        'Digital imaging systems',
                        'IT infrastructure and administrative systems',
                    ],
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'All of these rely on a continuous, stable power source. Malfunction, system error, or unplanned downtime in any of these environments carries consequences that go far beyond financial loss.',
                ],
                [
                    'type' => 'heading',
                    'text' => 'Our experience in healthcare',
                ],
                [
                    'type' => 'paragraph',
                    'text' => 'Trusted by leading healthcare authorities across the UK, we have completed over 100 three-phase UPS installations and delivered UPS solutions supporting operating theatres nationwide.',
                ],
                [
                    'type' => 'heading',
                    'text' => 'Regulations we comply with:',
                ],
                [
                    'type' => 'list',
                    'items' => [
                        'HTM (Health Technical Memorandum)',
                        'BS7671 (British Standard)',
                        'BS6290-4 (British Standard)',
                        'IEC60601 (International Electrotechnical Commission)',
                    ],
                ],
            ],
        ],
    ];

    return $data;
}

function pps_get_sector_by_slug(string $slug): ?array
{
    foreach (pps_sector_data() as $sector) {
        if (($sector['slug'] ?? '') === $slug) {
            return $sector;
        }
    }

    return null;
}

function pps_other_sectors_data(string $current_slug): array
{
    return array_values(array_filter(
        pps_sector_data(),
        static fn(array $sector): bool => ($sector['slug'] ?? '') !== $current_slug
    ));
}

function pps_support_data(): array
{
    return [
        [
            'title' => 'Support & Aftercare Services',
            'href' => home_url('/support/'),
            'description' => 'Ongoing technical support, maintenance, and rapid assistance.',
            'icon' => 'support',
        ],
        [
            'title' => 'Manuals',
            'href' => home_url('/manuals/'),
            'description' => 'Search and download equipment manuals by brand and model.',
            'icon' => 'manuals',
        ],
        [
            'title' => 'FAQs',
            'href' => home_url('/faqs/'),
            'description' => 'Answers to common questions on UPS systems, service, and support.',
            'icon' => 'faq',
        ],
        [
            'title' => 'Blog',
            'href' => '',
            'description' => 'Articles, guides, and updates. Coming soon.',
            'icon' => 'blog',
            'disabled' => true,
        ],
    ];
}

function pps_support_cards_data(): array
{
    return [
        [
            'title' => 'Technical Support',
            'description' => 'Responsive troubleshooting and guidance to resolve faults quickly and reduce disruption.',
            'icon' => 'support',
            'bullets' => [
                'Rapid fault triage for UPS and standby power systems',
                'Clear technical guidance for next-step resolution',
                'Support aimed at minimising downtime impact',
            ],
        ],
        [
            'title' => 'Maintenance Contracts',
            'description' => 'Planned maintenance agreements for UPS and generators to keep systems reliable.',
            'icon' => 'maintenance',
            'bullets' => [
                'Scheduled preventive visits matched to your site risk profile',
                'Service records and reporting for operational visibility',
                'Flexible contract options for single or multi-site estates',
            ],
        ],
        [
            'title' => 'System Health Checks',
            'description' => 'Detailed health checks for UPS and generator systems with clear condition reporting.',
            'icon' => 'health',
            'bullets' => [
                'Load, runtime and system condition assessment',
                'Early identification of wear, faults and risk points',
                'Prioritised recommendations for remediation planning',
            ],
        ],
        [
            'title' => 'Load Bank Testing',
            'description' => 'Generator load bank testing to verify performance under real operating conditions.',
            'icon' => 'generator',
            'bullets' => [
                'Controlled test conditions to validate generator output',
                'Performance checks under realistic operating loads',
                'Documented results to support maintenance planning',
            ],
        ],
        [
            'title' => 'Battery Replacement',
            'description' => 'UPS battery testing and replacement to protect runtime performance and resilience.',
            'icon' => 'battery',
            'bullets' => [
                'Battery condition testing and lifecycle checks',
                'Planned and reactive replacement options',
                'Post-replacement validation for dependable autonomy',
            ],
        ],
        [
            'title' => 'Repair Services',
            'description' => 'Repair services for UPS and generators with practical recommendations on next steps.',
            'icon' => 'repair',
            'bullets' => [
                'Diagnosis and repair of common UPS and generator faults',
                'Practical repair-vs-replace guidance where needed',
                'Targeted remediation to restore reliable operation',
            ],
        ],
        [
            'title' => 'Equipment Relocation',
            'description' => 'Safe relocation support for temporary or permanent site moves and infrastructure changes.',
            'icon' => 'relocation',
            'bullets' => [
                'Planned decommissioning and relocation sequencing',
                'Controlled transport and reinstallation support',
                'Commissioning checks after move completion',
            ],
        ],
    ];
}

function pps_faq_items_data(): array
{
    return [
        [
            'question' => 'How quickly can you respond if we lose power or have a UPS fault?',
            'answer' => 'Response times depend on your support agreement and location, but we prioritise critical incidents and can provide rapid triage, remote guidance, and on-site attendance where needed.',
        ],
        [
            'question' => 'Do you only support systems you originally installed?',
            'answer' => 'No. We regularly support existing UPS and backup power systems, including legacy installations and multi-brand estates, whether or not we completed the original install.',
        ],
        [
            'question' => 'Can you help us choose the right UPS size before purchase?',
            'answer' => 'Yes. We can review your load profile, runtime targets, growth plans, and site constraints to recommend suitable UPS options with the right capacity and resilience.',
        ],
        [
            'question' => 'Do you offer planned maintenance contracts?',
            'answer' => 'Yes. We provide planned maintenance options that include routine inspections, health checks, reporting, and proactive recommendations to reduce unplanned downtime.',
        ],
        [
            'question' => 'Can you supply and replace UPS batteries?',
            'answer' => 'Yes. We offer battery testing, replacement, and post-install validation to help maintain runtime performance and avoid battery-related failure risks.',
        ],
        [
            'question' => 'Where do you provide service coverage?',
            'answer' => 'We support sites across the UK. If you share your location and requirements, we can confirm coverage and next steps quickly.',
        ],
    ];
}

function pps_quick_links_data(): array
{
    return [
        ['label' => 'Home', 'href' => home_url('/')],
        ['label' => 'About Us', 'href' => home_url('/about/')],
        ['label' => 'Services', 'href' => home_url('/services/')],
        ['label' => 'Who We Help', 'href' => home_url('/who-we-help/')],
        ['label' => 'Support & Aftercare Services', 'href' => home_url('/support/')],
        ['label' => 'Manuals', 'href' => home_url('/manuals/')],
        ['label' => 'FAQs', 'href' => home_url('/faqs/')],
        ['label' => 'Contact', 'href' => home_url('/contact/')],
    ];
}

function pps_supplier_logos_data(): array
{
    return [
        [
            'name' => 'APC',
            'image' => 'supplier-logos/apc-white.png',
            'alt' => 'APC supplier logo',
        ],
        [
            'name' => 'Riello',
            'image' => 'supplier-logos/riello-white.png',
            'alt' => 'Riello UPS supplier logo',
        ],
        [
            'name' => 'Borri',
            'image' => 'supplier-logos/borri-white.png',
            'alt' => 'Borri supplier logo',
        ],
        [
            'name' => 'Eaton Powerware',
            'image' => 'supplier-logos/eaton-white.png',
            'alt' => 'Eaton supplier logo',
        ],
        [
            'name' => 'Emerson Network Power',
            'image' => 'supplier-logos/vertiv-white.png',
            'alt' => 'Vertiv supplier logo',
        ],
    ];
}

function pps_client_logos_data(): array
{
    return [
        [
            'name' => 'Kingspan',
            'image' => 'client-logos/kingspan.png',
            'alt' => 'Kingspan client logo',
        ],
        [
            'name' => 'NHS',
            'image' => 'client-logos/nhs-1.png',
            'alt' => 'NHS client logo',
        ],
        [
            'name' => 'Schaeffler',
            'image' => 'client-logos/schaeffler.png',
            'alt' => 'Schaeffler client logo',
        ],
        [
            'name' => 'University of Essex',
            'image' => 'client-logos/university-of-essex.png',
            'alt' => 'University of Essex client logo',
        ],
        [
            'name' => 'CF',
            'image' => 'client-logos/cf-logo.png',
            'alt' => 'CF client logo',
        ],
        [
            'name' => 'Snap-on',
            'image' => 'client-logos/snap-on.png',
            'alt' => 'Snap-on client logo',
        ],
        [
            'name' => 'Waterstones',
            'image' => 'client-logos/waterstones.png',
            'alt' => 'Waterstones client logo',
        ],
    ];
}

function pps_testimonials_data(): array
{
    return [
        [
            'quote' => 'Power Protection Services gave us independent options, not a one-brand sales pitch. They modelled multiple UPS and battery combinations against our actual load profile, explained the trade-offs clearly, and delivered an installation that was completed on programme with minimal disruption to teaching facilities.',
            'name' => 'Head of IT Infrastructure',
            'role' => 'University Sector',
            'company' => 'Education Client',
        ],
        [
            'quote' => 'From initial survey to commissioning, everything was handled by one accountable team. The project plan, RAMS documentation and handover pack were all well structured, and their response times during and after installation have been consistently fast and reliable.',
            'name' => 'Facilities Manager',
            'role' => 'Healthcare',
            'company' => 'NHS Partner Site',
        ],
        [
            'quote' => 'Their maintenance support has materially reduced risk across our estate. Preventive visits are proactive, reporting is clear, and any faults are prioritised quickly, which has given us far greater confidence in our backup power resilience during critical service windows.',
            'name' => 'Operations Director',
            'role' => 'Government and Local Council',
            'company' => 'Council Services',
        ],
        [
            'quote' => 'The project team planned around a live environment with strict uptime requirements and delivered without service interruption. They coordinated access carefully with our operations team, phased the works sensibly, and kept stakeholders updated at every stage of the project.',
            'name' => 'Data Centre Manager',
            'role' => 'Corporate Organisation',
            'company' => 'Enterprise Client',
        ],
        [
            'quote' => 'They helped us select the right UPS and battery package for our customers’ load profiles rather than pushing the highest-cost option. That technical clarity has improved our own proposals, reduced lifecycle cost surprises, and strengthened client trust in our recommendations.',
            'name' => 'Procurement Lead',
            'role' => 'IT Reseller',
            'company' => 'Channel Partner',
        ],
        [
            'quote' => 'Survey quality was excellent and the commissioning paperwork was complete and easy to audit. Their engineers documented test results and certification details to a high standard, which made compliance sign-off straightforward for our internal governance and external reviewers.',
            'name' => 'Site Operations Manager',
            'role' => 'Healthcare',
            'company' => 'Private Hospital Group',
        ],
    ];
}

function pps_contact_sector_options(): array
{
    return [
        'Hospitals & Healthcare',
        'Universities and Education',
        'Government and Local Council',
        'Coorporate Organisations',
        'IT Resellers & Contractors',
        'Small and Medium Businesses',
        'Other',
    ];
}
