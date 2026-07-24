import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import clsx from 'clsx';
import Modal, { type ModalImage } from '../Modal/Modal';


const colorScheme = {
    purple: {
        text: 'text-accent-purple',
        background: 'bg-accent-purple/10',
        hoverBackground: '',
        hoverBorder: 'hover:border-accent-purple/50 ',
        border: ''
    },
    cyan: {
        text: 'text-accent-cyan',
        background: 'bg-accent-cyan/10',
        hoverBackground: '',
        hoverBorder: 'hover:border-accent-cyan/50 ',
        border: ''
    },
    red: {
        text: 'text-accent-red',
        background: 'bg-accent-red/10',
        hoverBackground: '',
        hoverBorder: 'hover:border-accent-red/50 ',
        border: ''
    },
    orange: {
        text: 'text-accent-orange',
        background: 'bg-accent-orange/10',
        hoverBackground: '',
        hoverBorder: 'hover:border-accent-orange/50 ',
        border: ''
    },
    green: {
        text: 'text-accent-green',
        background: 'bg-accent-green/10',
        hoverBackground: '',
        hoverBorder: 'hover:border-accent-green/50 ',
        border: ''
    },
    teal: {
        text: 'text-accent-teal',
        background: 'bg-accent-teal/10',
        hoverBackground: '',
        hoverBorder: 'hover:border-accent-teal/50 ',
        border: ''
    },
    magenta: {
        text: 'text-accent-magenta',
        background: 'bg-accent-magenta/10',
        hoverBackground: '',
        hoverBorder: 'hover:border-accent-magenta/50 ',
        border: ''
    },
    yellow: {
        text: 'text-accent-yellow',
        background: 'bg-accent-yellow/10',
        hoverBackground: '',
        hoverBorder: 'hover:border-accent-yellow/50 ',
        border: ''
    },
} as const;

type ColorScheme = keyof typeof colorScheme;
type WorkFilter = 'all' | 'fullstack' | 'wordpress';

const workFilters: { value: WorkFilter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'fullstack', label: 'Fullstacks' },
    { value: 'wordpress', label: 'WordPress' },
];

function getWorkFilterFromUrl(): WorkFilter {
    const workParam = new URLSearchParams(window.location.search).get('work');

    return workFilters.some((filter) => filter.value === workParam)
        ? workParam as WorkFilter
        : 'all';
}

type WorkType = {
    accent: ColorScheme;
    tags?: string[];
    title: string;
    description: string;
    description2?: string;
    highlights: string[];
    techStacks: string[];
    images: ModalImage[];
};

const works: WorkType[] = [
    {
        accent: 'purple',
        tags: ['fullstack'],
        title: 'Presyo',
        description: 'A simple costing and pricing app that helps businesses track ingredient expenses, calculate production costs, and determine profitable retail and wholesale prices.',
        highlights: [
            'Tracking ingredient purchase cost, quantity, and unit cost',
            'Calculating the ingredient cost used per recipe or product',
            'Adding overhead costs, such as electricity',
            'Calculating total production and per-item cost',
            'Applying markup or target profit',
            'Supporting different prices, such as wholesale and retail'
        ],
        techStacks: [
            'ReactJS + Vite',
            'PWA',
            'Biometrics Login (Passkey)',
            'TypeScript',
            'Shadcn UI',
            'TailwindCSS',
            'React Hook Form',
            'Zustand',
            'Codex',
            'LocalStorage'
        ],
        images: [
            { title: 'Presyo Dashboard', url: './images/projects/presyo/dashboard.png'},
            { title: 'Light Mode', url: './images/projects/presyo/light-mode.png'},
            { title: 'Products List', url: './images/projects/presyo/products_list.png'},
            { title: 'Products Form', url: './images/projects/presyo/product_form.png'},
            { title: 'Default Login', url: './images/projects/presyo/login-default.png'},
            { title: 'Login with Passkey', url: './images/projects/presyo/login-with-passkey.png'},
        ]
    },

    {
        accent: 'cyan',
        tags: ['fullstack'],
        title: 'BIDA Security Agency',
        description: 'A full-stack CRM and Payroll System designed to manage security guard records, client contracts, guard assignments, payroll processing, and operational reports. The system helped organize both internal agency operations and client-related workflows in a centralized platform.',
        highlights: [
            'Employee management',
            'Client assignments',
            'Client contracts / cost distributions',
            'Time and attendance',
            'Payroll processing',
            'Philippine payroll deductions',
            'Loans and repayments',
            'Payslips and payroll history',
            'Reporting'
        ],
        techStacks: [
            'ReactJS + Vite',
            'Laravel',
            'Laravel Sanctum',
            'TypeScript',
            'Material Tailwind',
            'REST API',
            'React Hook Form',
            'Zustand',
            'Codex',
            'MySQL'
        ],
        images: [
            { title: 'BIDA Dashboard', url: './images/projects/bida/dashboard.png'},
            { title: 'Cost Distributions', url: './images/projects/bida/cost_distributions.png'},
            { title: 'Employee Payslip', url: './images/projects/bida/payslip.png'},
            { title: 'Cost Distribution Report', url: './images/projects/bida/cost_distribution_report.png'},
            { title: 'BIDA Login', url: './images/projects/bida/login.png'},
        ]
    },

    {
        accent: 'yellow',
        tags: ['fullstack'],
        title: 'PSS Precious International',
        description: 'A web-based platform for managing members, sponsorship networks, binary and unilevel structures, product orders, commissions, bonuses, and payouts. It helps administrators monitor member activity, sales performance, genealogy trees, and earnings in one centralized system.',
        highlights: [
            'Member /Distributor Management',
            'Genealogy / Network Tree',
            'Compensation / Commission Engine',
            'Product / Package Management',
            'Inventory Tracking',
            'Order and Sales Tracking',
            'Wallet / Payout System',
            'Admin Dashboard / Reporting'
        ],
        techStacks: [
            'ReactJS + Vite',
            'PWA',
            'Laravel',
            'Laravel Sanctum',
            'TypeScript',
            'React OrgChart',
            'RadixUI',
            'TailwindCSS',
            'REST API',
            'React Hook Form',
            'Zustand',
            'Codex',
            'MySQL 8.0'
        ],
        images: [
            { title: 'PSS Login', url: './images/projects/pss/login.png'},
            { title: 'PSS Dashboard', url: './images/projects/pss/dashboard.png'},
            { title: 'Member Genealogy', url: './images/projects/pss/genealogy.png'},
            { title: 'PSS Shop', url: './images/projects/pss/shop.png'},
            { title: 'Member Dashboard', url: './images/projects/pss/member-dashboard.png'},
            { title: 'Member Commissions', url: './images/projects/pss/member-commission-summary.png'},
        ]
    },

    {
        accent: 'green',
        tags: ['fullstack'],
        title: 'CreDebt Loan App',
        description: 'A full-stack loan portfolio management application for lenders and borrowers. Lenders can manage borrower profiles, create reducing-balance loans, record payments, monitor balances, and generate detailed PDF statements.',
        highlights: [
            'Separate lender and borrower dashboards',
            'Borrower profile and portal-account management',
            'Reducing-balance loan calculations',
            'Monthly principal and interest breakdown',
            'Concurrent-payment and duplicate-transaction protection',
            'Payment recording and transaction history',
            'PDF preview and report generation',
        ],
        techStacks: [
            'ReactJS + Vite',
            'Laravel API',
            'Laravel Sanctum',
            'TypeScript',
            'jsPDF',
            'AutoTable',
            'TailwindCSS',
            'REST API',
            'Codex',
            'MySQL'
        ],
        images: [
            { title: 'Admin Dashboard', url: './images/projects/credebt/dashboard.png'},
            { title: 'Borrowers Dashboard', url: './images/projects/credebt/borrowers_dashboard.png'},
            { title: 'Borrowers List', url: './images/projects/credebt/borrowers.png'},
            { title: 'Loan Details', url: './images/projects/credebt/loan_detail.png'},
            { title: 'Loan Summary Report', url: './images/projects/credebt/loan_summary_print.png'},
            { title: 'Loans', url: './images/projects/credebt/loans.png'},
        ]
    },
    {
        accent: 'cyan',
        tags: ['wordpress'],
        title: 'ACZ Elementor Plugin',
        description: 'A lightweight Elementor addon plugin that extends Elementor with custom widgets, template controls, and theme-related tools.',
        highlights: [
            'Manage display conditions in Theme Options ',
            'Custom CSS',
            'Slidershow Widget',
            'Gallery and Post List with Filters',
            'Breadcrumbs',
            'Post and Logo Carousel',
            'Taxonomy and Custom Meta text widgets',
            'FAQ Accordion section widget',
        ],
        techStacks: [
            'Wordpress',
            'Elementor',
            'ACF',
        ],
        images: [
            { title: 'The Elementor Widgets', url: './images/projects/acz-elements/elementor_widgets.png'},
            { title: 'ACZ Custom CSS', url: './images/projects/acz-elements/custom_css.png'},
            { title: 'ACZ Options', url: './images/projects/acz-elements/display_conditions.png'},
        ]
    },
    {
        accent: 'green',
        tags: ['wordpress'],
        title: 'ACZ Elementor Container Slider',
        description: 'A WordPress plugin that extends Elementor with a custom widget called Layer Slideshow. Unlike a traditional image slider, each slide functions as a fully editable nested Elementor container, allowing you to add and arrange standard Elementor widgets directly inside it.',
        highlights: [
            'Custom Slideshow widget for Elementor',
            'Each slide works as a nested Elementor container',
            'Supports text, images, buttons, icons, videos, forms, and more',
            'Drag-and-drop slide content editing',
            'Flexible positioning, spacing, and alignment controls',
            'Independent styling for each slide and content layer',
            'Suitable for hero banners, promotions, product showcases, and presentations',
            'No custom coding required',
        ],
        techStacks: [
            'Wordpress',
            'Elementor',
            'ACF',
        ],
        images: [
            { title: 'Admin Dashboard', url: './images/projects/credebt/dashboard.png'},
            { title: 'Borrowers Dashboard', url: './images/projects/credebt/borrowers_dashboard.png'},
            { title: 'Borrowers List', url: './images/projects/credebt/borrowers.png'},
            { title: 'Loan Details', url: './images/projects/credebt/loan_detail.png'},
            { title: 'Loan Summary Report', url: './images/projects/credebt/loan_summary_print.png'},
            { title: 'Loans', url: './images/projects/credebt/loans.png'},
        ]
    },
    {
        accent: 'red',
        tags: ['wordpress'],
        title: 'SharedCrumbs',
        description: 'A personal blog where I share life experiences, meaningful reflections, and lessons learned along the way. It is a space for honest stories, personal growth, and everyday moments that may inspire, encourage, or resonate with others.',
        highlights: [
            'Personal stories and real-life experiences',
            'Honest reflections and meaningful insights',
            'Lessons learned through everyday moments',
            'Content focused on growth and self-discovery',
            'Relatable stories that connect with readers',
            'Encouraging and inspiring perspectives',
            'A thoughtful space for sharing life\'s journey',
        ],
        techStacks: [
            'Wordpress',
            'Elementor',
            'ACF',
        ],
        images: [
            { title: 'Admin Dashboard', url: './images/projects/sharedcrumbs/frontpage.png'},
            { title: 'Borrowers Dashboard', url: './images/projects/sharedcrumbs/archive.png'},
            { title: 'Borrowers List', url: './images/projects/sharedcrumbs/single.png'},
        ]
    },
    {
        accent: 'yellow',
        tags: ['wordpress'],
        title: 'Airy Create',
        description: 'A portfolio of soft, elegant, and cheerful balloon designs for birthdays, weddings, corporate gatherings, and other special occasions. Browse available pricing packages and conveniently book a custom balloon setup for your upcoming event.',
        highlights: [
            'Elegant Balloon Design Portfolio',
            'Designs for Every Occasion',
            'Clear Pricing Packages',
            'Personalized Balloon Styling',
            'Professional Brand Presentation',
            'User-Friendly Experience',
            'Responsive Website Design',
        ],
        techStacks: [
            'Wordpress',
            'Elementor',
            'ACF',
        ],
        images: [
            { title: 'Homepage', url: './images/projects/airycreates/front.png'},
            { title: 'About Page', url: './images/projects/airycreates/about.png'},
            { title: 'Pricing', url: './images/projects/airycreates/pricing.png'},
            { title: 'Events Gallery', url: './images/projects/airycreates/gallery.png'},
        ]
    }
];

function Works() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>(getWorkFilterFromUrl);
  const projectsPanelRef = useRef<HTMLDivElement>(null);
  const isInitialFilterRender = useRef(true);
  const [lightbox, setLightbox] = useState<{
    images: ModalImage[];
    currentIndex: number;
  } | null>(null);

  const selectWorkFilter = useCallback((filter: WorkFilter) => {
    const url = new URL(window.location.href);

    if (filter === 'all') {
      url.searchParams.delete('work');
    } else {
      url.searchParams.set('work', filter);
    }

    window.history.pushState({}, '', url);
    setActiveFilter(filter);
  }, []);

  useEffect(() => {
    const syncFilterWithUrl = () => {
      setActiveFilter(getWorkFilterFromUrl());
    };

    window.addEventListener('popstate', syncFilterWithUrl);

    return () => {
      window.removeEventListener('popstate', syncFilterWithUrl);
    };
  }, []);

  useEffect(() => {
    if (isInitialFilterRender.current) {
      isInitialFilterRender.current = false;
      return;
    }

    const visibleCards = projectsPanelRef.current?.querySelectorAll<HTMLElement>(
      '[data-work-card]:not(.hidden)',
    );

    visibleCards?.forEach((card) => {
      card.classList.remove('revealed');
    });

    // Flush the hidden state so adding the class again restarts the transition.
    void projectsPanelRef.current?.offsetWidth;

    const animationFrame = window.requestAnimationFrame(() => {
      visibleCards?.forEach((card) => {
        card.classList.add('revealed');
      });
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [activeFilter]);

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      return;
    }

    event.preventDefault();

    let nextIndex = currentIndex;

    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % workFilters.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + workFilters.length) % workFilters.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = workFilters.length - 1;
    }

    const nextFilter = workFilters[nextIndex].value;
    selectWorkFilter(nextFilter);
    document.getElementById(`work-tab-${nextFilter}`)?.focus();
  };

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const showPreviousImage = useCallback(() => {
    setLightbox((current) => current && ({
      ...current,
      currentIndex: (current.currentIndex - 1 + current.images.length) % current.images.length,
    }));
  }, []);

  const showNextImage = useCallback(() => {
    setLightbox((current) => current && ({
      ...current,
      currentIndex: (current.currentIndex + 1) % current.images.length,
    }));
  }, []);

  return (
    <>
      <section id="work" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 reveal">
            <p className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-4">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Recent Projects</h2>
          </div>

          <div
            className="flex flex-wrap gap-2 mb-8 reveal"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {workFilters.map((filter, index) => {
              const projectCount = filter.value === 'all'
                ? works.length
                : works.filter((work) => work.tags?.includes(filter.value)).length;
              const isActive = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  id={`work-tab-${filter.value}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="work-projects-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => selectWorkFilter(filter.value)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={clsx(
                    'px-5 py-2.5 rounded-lg border text-sm font-medium transition-all',
                    isActive
                      ? 'bg-accent-teal border-accent-teal text-white'
                      : 'bg-bg-surface border-border text-text-muted hover:text-text-primary hover:border-accent-teal/50',
                  )}
                >
                  {filter.label}
                  <span
                    className={clsx(
                      'ml-2 text-xs',
                      isActive ? 'text-white/70' : 'text-text-muted',
                    )}
                  >
                    {projectCount}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            ref={projectsPanelRef}
            id="work-projects-panel"
            className="grid md:grid-cols-2 gap-8"
            role="tabpanel"
            aria-labelledby={`work-tab-${activeFilter}`}
          >
            {works.map((work) => {
                const isVisible = activeFilter === 'all'
                  || (work.tags?.includes(activeFilter) ?? false);

                return (
                  <Work
                    key={work.title}
                    {...work}
                    isVisible={isVisible}
                    onImageClick={(currentIndex) => {
                      setLightbox({ images: work.images, currentIndex });
                    }}
                  />
                )
            })}
          </div>
        </div>
      </section>
      <Modal
        images={lightbox?.images ?? []}
        currentIndex={lightbox?.currentIndex ?? 0}
        isOpen={lightbox !== null}
        onClose={closeLightbox}
        onPrevious={showPreviousImage}
        onNext={showNextImage}
      />
    </>
  )
}


function Work({
    accent,
    title,
    description,
    description2,
    highlights,
    techStacks,
    images,
    onImageClick,
    isVisible,
}: WorkType & {
    onImageClick: (index: number) => void;
    isVisible: boolean;
}) {

    const scheme = colorScheme[accent];
    
    return (
        <>
            <article
              data-work-card
              className={clsx(
                "group bg-bg-surface border border-border",
                "rounded-2xl p-8 transition-all duration-300 reveal",
                scheme.hoverBorder,
                !isVisible && "hidden",
            )}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-text-muted mb-6 leading-relaxed">
                  {description}
                </p>
                <p className="text-text-muted mb-6 leading-relaxed">
                  {description2}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-xs font-mono text-text-muted uppercase mb-3">
                  Highlights
                </p>
                <ul className="space-y-2 text-sm text-text-muted">
                    {highlights.map((highlight, i) => {
                        return <li 
                            key={i}
                            className="flex items-start">
                                <span className={scheme.text + " mr-2"}>•</span>
                                {highlight}
                            </li>
                    })}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                    {techStacks.map((tech, i) => {
                        return  <span
                                    key={i}
                                    className={clsx(
                                        "px-3 py-1 text-xs font-mono rounded-md",
                                        scheme.background,
                                        scheme.text
                                    )}
                                    >{tech}</span>;
                    })}
              </div>

              
              <div>
                <p className="text-xs font-mono text-text-muted uppercase mb-3">
                  Project Screenshots
                </p>
                <div className="grid grid-cols-2 gap-3">
                    {images.map((image, i) => {
                        return  <button
                                    key={i}
                                    type="button"
                                    className={clsx(
                                        "group relative overflow-hidden rounded-lg",
                                        "border border-border transition-all cursor-pointer",
                                        scheme.hoverBorder,
                                    )}
                                    aria-label={`Preview ${image.title}`}
                                    onClick={() => onImageClick(i)}
                                >
                                    <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-auto h-auto max-h-[140px] object-cover transition-transform group-hover:scale-105 mx-auto"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                                    <span className="text-xs text-text-primary font-medium">View Full Size</span>
                                    </div>
                                </button>
                    })}
                </div>
              </div>
            </article>
        </>
    );
}

export default Works
