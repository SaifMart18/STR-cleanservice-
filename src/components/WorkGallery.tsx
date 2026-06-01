import React, { useState } from "react";
import { TranslationDict } from "../types";
import { Eye, Info, Sparkles, Filter, ShieldCheck } from "lucide-react";

interface ProjectItem {
  id: number;
  category: "homes" | "villas" | "offices" | "hospitals" | "airports" | "commercial";
  titleAr: string;
  titleEn: string;
  locationAr: string;
  locationEn: string;
  beforeImg: string;
  afterImg: string;
  detailsAr: string;
  detailsEn: string;
}

interface GalleryProps {
  lang: "ar" | "en";
  t: TranslationDict;
}

export const WorkGallery: React.FC<GalleryProps> = ({ lang, t }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
  
  // Interactive individual toggle for Before-and-After state of each card
  const [projectStates, setProjectStates] = useState<Record<number, "after" | "before">>({
    1: "after",
    2: "after",
    3: "after",
    4: "after",
    5: "after",
    6: "after"
  });

  const toggleProjectState = (id: number) => {
    setProjectStates((prev) => ({
      ...prev,
      [id]: prev[id] === "after" ? "before" : "after",
    }));
  };

  const projects: ProjectItem[] = [
    {
      id: 1,
      category: "villas",
      titleAr: "فيلا سكنية فاخرة - عينكاوة",
      titleEn: "Luxury Residential Villa - Ankawa",
      locationAr: "مجمع عينكاوة، أربيل",
      locationEn: "Ankawa Compound, Erbil",
      beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80", // Dusty marble floor during construct
      afterImg: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80", // Pristine pool villa lobby
      detailsAr: "تنظيف ما بعد الصبغ وإزالة الإسمنت وجلي بلاط الكريستال وتلميع الملحقات.",
      detailsEn: "Post-renovation cleanup, paint drop removal, Italian marble polishing, and fittings glossing."
    },
    {
      id: 2,
      category: "offices",
      titleAr: "مكاتب شركة تكنولوجيا - شارع جولان",
      titleEn: "Tech Corporate Offices - Gulan Street",
      locationAr: "برج جولان التجاري، أربيل",
      locationEn: "Gulan Tower, Erbil",
      beforeImg: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80", // Messy office desk
      afterImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", // Spotless minimalist corporate desk
      detailsAr: "تعقيم الأجهزة الإلكترونية بعناية، تنظيف الكراسي بالبخار، ومسح الواجهات الزجاجية.",
      detailsEn: "Electronic hardware sanitisation, furniture vacuum therapy, and deep panoramic glass buffing."
    },
    {
      id: 3,
      category: "hospitals",
      titleAr: "جناح العناية المركزة - مستشفى السويدي",
      titleEn: "ICU Specialist Ward - Swedish Hospital",
      locationAr: "شارع 100م، أربيل",
      locationEn: "100m Road, Erbil",
      beforeImg: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", // Medical ward dusty corner
      afterImg: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80", // Hospital sanitised zone
      detailsAr: "تعقّم مستمر بمطهرات طبية أوروبية للقضاء على الفيروسات والبكتريا بنسبة 99.9%.",
      detailsEn: "Clinical-grade micro-fogging sterilisation destroying 99.9% of germs and cross-infection vectors."
    },
    {
      id: 4,
      category: "airports",
      titleAr: "صالة المغادرة كبار الشخصيات - مطار أربيل",
      titleEn: "VIP Departure Lounge - Erbil Airport",
      locationAr: "مطار أربيل الدولي، أربيل",
      locationEn: "Erbil International Airport",
      beforeImg: "https://images.unsplash.com/photo-1530521951415-3dbd69e236bd?auto=format&fit=crop&w=800&q=80", // Airport under repair
      afterImg: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80", // Sparking shiny passenger lobby
      detailsAr: "تلميع السيراميك الصناعي عالي الكفاءة، محو الغبار الدقيق من المنحوتات والمرافق على مدار الساعة.",
      detailsEn: "High-traffic floor ceramic glazing, fine dust removal, and comprehensive rest-zone polish."
    },
    {
      id: 5,
      category: "commercial",
      titleAr: "مركز تسوق رويال بوليفارد",
      titleEn: "Royal Boulevard Mall Complex",
      locationAr: "شارع الرياض، أربيل",
      locationEn: "Riyadh District, Erbil",
      beforeImg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80", // Dusty construction site
      afterImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", // Gleaming high gloss glass center
      detailsAr: "إزالة مخلفات البناء، غسيل ميكانيكي بمضخات الضغط العالي، وتأهيل المركز للافتتاح الرسمي.",
      detailsEn: "Heavy concrete/tape scraping, hydraulic pressure power washing, preparing central mall for launch."
    },
    {
      id: 6,
      category: "homes",
      titleAr: "شقة بنتهاوس علوية سكنية",
      titleEn: "Premium Penthouse Flat - Erbil Hills",
      locationAr: "مشروع تلال أربيل، أربيل",
      locationEn: "Erbil Hills, Erbil",
      beforeImg: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80", // Messy room corner
      afterImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80", // Cleanest room corner
      detailsAr: "تنظيف وتعقيم صوفا وجلود الكنب ومسح مصابيح الإنارة الفخمة وطبقة الغبار الدقيق.",
      detailsEn: "Leather sofa cream polishing, crystal chandeliers dusting, and deep carpets allergen suction."
    }
  ];

  // Filtering Logic
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const categoriesList = [
    { key: "all", label: t.galleryCategories.all },
    { key: "homes", label: t.galleryCategories.homes },
    { key: "villas", label: t.galleryCategories.villas },
    { key: "offices", label: t.galleryCategories.offices },
    { key: "hospitals", label: t.galleryCategories.hospitals },
    { key: "airports", label: t.galleryCategories.airports },
    { key: "commercial", label: t.galleryCategories.commercial },
  ];

  return (
    <section
      id="gallery"
      className="py-24 bg-white relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="gallery-container">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12" id="gallery-header">
          <span
            className="text-brand-blue uppercase font-bold tracking-widest text-xs px-3 py-1 bg-brand-blue/5 rounded-full w-fit mb-3 inline-block"
            id="gallery-tag"
          >
            {lang === "ar" ? "قائمة أعمالنا" : "Case Studies"}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight"
            id="gallery-main-heading"
          >
            {t.galleryTitle}
          </h2>
          <p
            className="mt-4 text-base text-brand-dark/70 font-light"
            id="gallery-supporting"
          >
            {t.gallerySubtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
          id="gallery-filters-container"
        >
          {categoriesList.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 shadow-sm ${
                selectedCategory === cat.key
                  ? "bg-brand-blue text-white shadow-brand-blue/20"
                  : "bg-brand-light text-brand-dark/80 hover:bg-brand-blue/5 hover:text-brand-blue border border-brand-dark/5"
              }`}
              type="button"
              id={`filter-tab-${cat.key}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with Interactive Flip comparison slider */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="gallery-projects-grid"
        >
          {filteredProjects.map((project) => {
            const isAfter = projectStates[project.id] === "after";

            return (
              <div
                key={project.id}
                className="bg-brand-light rounded-3xl overflow-hidden border border-brand-dark/5 hover:border-brand-blue/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                id={`project-card-${project.id}`}
              >
                
                {/* Visual Image container with Before/After Switch */}
                <div className="relative h-[241px] w-full overflow-hidden" id={`project-img-wrapper-${project.id}`}>
                  
                  {/* Before / After Images with cross-fade */}
                  <img
                    src={project.beforeImg}
                    alt="Before cleaning"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-0 ${
                      !isAfter ? "opacity-100" : "opacity-0"
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  <img
                    src={project.afterImg}
                    alt="After cleaning"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-0 ${
                      isAfter ? "opacity-100" : "opacity-0"
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark Shade Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none" />

                  {/* Floating Micro-Badge labels "BEFORE / AFTER" */}
                  <div
                    className={`absolute top-4 ${
                      lang === "ar" ? "right-4" : "left-4"
                    } z-20 flex items-center space-x-1.5`}
                  >
                    <span
                      className={`text-[10px] font-extrabold px-3 py-1 rounded-full text-white uppercase tracking-wider backdrop-blur-md shadow-md border ${
                        isAfter
                          ? "bg-green-500/80 border-green-400/40"
                          : "bg-red-500/80 border-red-400/40"
                      }`}
                    >
                      {isAfter ? t.galleryAfter : t.galleryBefore}
                    </span>
                  </div>

                  {/* High Tech Interactive "Before/After Slider Toggle Button" */}
                  <div className="absolute bottom-4 right-4 left-4 z-20 flex items-center justify-between">
                    <button
                      onClick={() => toggleProjectState(project.id)}
                      className="bg-brand-blue/90 hover:bg-brand-blue border border-white/20 text-white font-extrabold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full shadow-lg backdrop-blur-md transition-all scale-100 active:scale-95 flex items-center space-x-1.5"
                      type="button"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-brand-cyan animate-pulse shrink-0" />
                      <span className={lang === "ar" ? "mr-1" : "ml-1"}>
                        {isAfter ? t.galleryBefore : t.galleryAfter}
                      </span>
                    </button>

                    {/* Category micro indicator */}
                    <span className="text-[10px] text-white/80 font-bold bg-white/15 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                </div>

                {/* Text Description Box */}
                <div className="p-6 flex-grow flex flex-col justify-between" id={`project-details-wrap-${project.id}`}>
                  <div>
                    {/* Location Tag */}
                    <div className="flex items-center space-x-1 text-brand-blue/85 mb-1.5" id={`project-location-${project.id}`}>
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        {lang === "ar" ? project.locationAr : project.locationEn}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-base font-extrabold text-brand-dark leading-snug group-hover:text-brand-blue transition-colors">
                      {lang === "ar" ? project.titleAr : project.titleEn}
                    </h3>

                    {/* Detailed info paragraph */}
                    <p className="mt-3 text-xs text-brand-dark/70 leading-relaxed font-light min-h-[40px]">
                      {lang === "ar" ? project.detailsAr : project.detailsEn}
                    </p>
                  </div>

                  {/* Guaranteed Service Seal */}
                  <div className="mt-5 pt-4 border-t border-brand-dark/5 flex items-center justify-between" id={`project-seal-${project.id}`}>
                    <div className="flex items-center space-x-1.5 text-brand-cyan-700 bg-brand-cyan/10 px-2.5 py-1 rounded-lg">
                      <ShieldCheck className="h-3.5 w-3.5 text-brand-blue" />
                      <span className={`text-[9px] font-bold text-brand-blue ${lang === "ar" ? "mr-1" : ""}`}>
                        {lang === "ar" ? "تحقيق معايير النظافة 100٪" : "100% Cleaned Standard Check"}
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
