import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronRight,
  Clock3,
  Coffee,
  Fuel,
  Gift,
  HeartHandshake,
  MapPin,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react";

const SELF_URL =
  "https://waymart.selfrecruit.ge/e8e7ca79-c3fc-475c-9c01-bfde96354572";
const media = "/media/waymart";

const locations = [
  {
    title: "რუსთავის კომპლექსი",
    detail: "წითელი ხიდის გზატკეცილი, მე-19 კმ",
    map: "https://www.google.com/maps/search/?api=1&query=Rustavi%20Red%20Bridge%20highway%2019th%20km%20SOCAR%20WayMart",
  },
  {
    title: "ორთაჭალა",
    detail: "გულიას მოედანი 12, თბილისი",
    map: "https://www.google.com/maps/search/?api=1&query=Gulia%20Square%2012%20Tbilisi%20SOCAR%20WayMart",
  },
  {
    title: "ისანი-სამგორი",
    detail: "საბითუმო ბაზრობის ტერიტორია, თბილისი",
    map: "https://www.google.com/maps/search/?api=1&query=Isani%20Samgori%20wholesale%20market%20SOCAR%20WayMart",
  },
  {
    title: "საქართველოს სამხედრო გზა",
    detail: "ბოტანიკური ინსტიტუტის მიმდებარედ",
    map: "https://www.google.com/maps/search/?api=1&query=Georgian%20Military%20Road%20Botanical%20Institute%20SOCAR%20WayMart",
  },
];

const roles = [
  "მოლარე-კონსულტანტი",
  "ბარისტა / Grab & Go ზონა",
  "ცვლის უფროსი",
  "მერჩენდაიზინგი",
  "სტუმართან კომუნიკაცია",
  "საწყობის მხარდაჭერა",
];

const stories = [
  {
    title: "პირველი დღე გუნდში",
    text: "ახალი თანამშრომელი იღებს მკაფიო ინსტრუქციას, პრაქტიკულ დახმარებას და თანაგუნდელს, რომელიც პირველ ცვლებში გვერდით უდგას.",
    image: `${media}/waymart-counter.png`,
  },
  {
    title: "სწრაფი რიტმი, ადამიანური გარემო",
    text: "WayMart-ის დღე სავსეა სტუმრებით, ყავით, პროდუქტებით და ბევრი მცირე მომენტით, სადაც ყურადღება და ღიმილი განსხვავებას ქმნის.",
    image: `${media}/store-interior-night.png`,
  },
  {
    title: "პროდუქტი, რომელსაც ყოველდღე ხედავ",
    text: "ცხელი სასმელი, ჰოთდოგი, სასუსნავი და გზაში საჭირო ნივთები ქმნის გამოცდილებას, რომლის უკანაც გუნდის ყოველდღიური შრომაა.",
    image: `${media}/hotdog-moment.png`,
  },
];

export default function Home() {
  return (
    <main className="career-page">
      <section className="career-hero" aria-label="WayMart კარიერა">
        <img
          className="career-hero-media"
          src={`${media}/socar-waymart-station.png`}
          alt="SOCAR-ის სადგური WayMart მაღაზიით"
        />
        <div className="career-hero-overlay" />
        <header className="career-nav">
          <a className="career-brand" href="/" aria-label="WayMart career">
            <img src="/waymart-logo.jpg" alt="" />
            <span>
              ვეი მარტი
              <small>CAREERS</small>
            </span>
          </a>
          <nav aria-label="WayMart career navigation">
            <a href="#stories">ამბები</a>
            <a href="#conditions">პირობები</a>
            <a href="#locations">ლოკაციები</a>
          </nav>
          <a className="career-apply-mini" href={SELF_URL} target="_blank" rel="noopener noreferrer">
            განაცხადი <ArrowUpRight size={17} />
          </a>
        </header>

        <div className="career-hero-content">
          <p className="career-eyebrow">
            <Sparkles size={17} /> WayMart x SOCAR Georgia
          </p>
          <h1>WayMart კარიერა</h1>
          <p className="career-lead">
            Convenience store და Grab & Go გარემო SOCAR-ის სადგურებთან:
            ადგილი, სადაც პროდუქტი, სწრაფი მომსახურება და გუნდის ენერგია
            ერთად ქმნის ყოველდღიურ გამოცდილებას.
          </p>
          <div className="career-actions">
            <a className="career-primary" href={SELF_URL} target="_blank" rel="noopener noreferrer">
              შეავსე განაცხადი <ArrowUpRight size={20} />
            </a>
            <a className="career-secondary" href="/recruit-win?mode=demo">
              Recruit & Win <Gift size={19} />
            </a>
          </div>
        </div>

        <div className="career-hero-facts" aria-label="WayMart facts">
          <span>
            <Store size={18} /> 30+ ფილიალი
          </span>
          <span>
            <Fuel size={18} /> SOCAR სადგურებთან
          </span>
          <span>
            <Coffee size={18} /> Grab & Go
          </span>
        </div>
      </section>

      <section className="career-strip">
        <div>
          <b>WayMart რას წარმოადგენს?</b>
          <p>
            ყოველდღიური საყიდლები, ცხელი სასმელები, ჰოთდოგი და გზაში საჭირო
            პროდუქტები ერთ სწრაფ, სუფთა და კომფორტულ სივრცეში.
          </p>
        </div>
        <div>
          <b>ვის ვეძებთ?</b>
          <p>
            ადამიანებს, რომლებსაც მოსწონთ მომხმარებელთან ურთიერთობა, მოწესრიგებული
            სივრცე და ცოცხალი სამუშაო დღე.
          </p>
        </div>
        <div>
          <b>რატომ კარიერის გვერდი?</b>
          <p>
            კანდიდატმა გვერდზე უნდა დაინახოს გარემო, პროდუქტი, გუნდის რიტმი,
            პირობები და განაცხადისკენ მარტივი გზა.
          </p>
        </div>
      </section>

      <section className="career-section career-showcase" id="environment">
        <div className="career-section-head">
          <p className="career-eyebrow">გარემო და პროდუქტი</p>
          <h2>სადგურთან ახლოს, ადამიანებთან ახლოს.</h2>
        </div>
        <div className="career-mosaic">
          <img src={`${media}/grab-go-interior.png`} alt="WayMart Grab & Go ინტერიერი" />
          <img src={`${media}/waymart-lifestyle.png`} alt="WayMart პროდუქტები და სტუმრები" />
          <img src={`${media}/socar-station-meet.png`} alt="SOCAR და WayMart ბრენდული ვიზუალი" />
        </div>
      </section>

      <section className="career-section" id="stories">
        <div className="career-section-head">
          <p className="career-eyebrow">თანამშრომლის ამბები</p>
          <h2>აქ მუშაობა მხოლოდ სალარო არ არის.</h2>
          <p>
            გვერდი კანდიდატს უჩვენებს ყოველდღიურობას: ვინ შეხვდება, რა პროდუქტთან
            იმუშავებს, როგორი ტემპია და რა ემოცია აქვს გუნდში ყოფნას.
          </p>
        </div>
        <div className="career-story-grid">
          {stories.map((story) => (
            <article className="career-story" key={story.title}>
              <img src={story.image} alt="" />
              <div>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="career-section career-videos" aria-label="WayMart videos">
        <div className="career-section-head">
          <p className="career-eyebrow">ვიდეო მომენტები</p>
          <h2>ცოცხალი მასალა გვერდზე.</h2>
          <p>
            შენს მოწოდებულ ვიდეოებს ვიყენებთ როგორც რეალურ ატმოსფეროს: მოძრაობა,
            სივრცე, პროდუქტი და ბრენდის ყოველდღიური ენერგია.
          </p>
        </div>
        <div className="career-video-grid">
          {[1, 2, 3, 4].map((item) => (
            <figure key={item}>
              <video
                src={`${media}/team-moment-0${item}.mp4`}
                poster={`${media}/store-interior-night.png`}
                controls
                muted
                playsInline
                preload="metadata"
              />
              <figcaption>WayMart მომენტი 0{item}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="career-section career-work" id="conditions">
        <div className="career-section-head">
          <p className="career-eyebrow">სამუშაო პირობები</p>
          <h2>კანდიდატისთვის გასაგები, მშვიდი და კონკრეტული.</h2>
        </div>
        <div className="career-work-grid">
          <article>
            <Clock3 size={26} />
            <h3>ცვლები და რიტმი</h3>
            <p>
              სტრუქტურირებული ცვლები, სწრაფი მომსახურება და მკაფიო პასუხისმგებლობები
              მაღაზიის სისუფთავეზე, თაროებზე და სტუმართან კომუნიკაციაზე.
            </p>
          </article>
          <article>
            <HeartHandshake size={26} />
            <h3>გუნდი და მხარდაჭერა</h3>
            <p>
              ახალი წევრი იწყებს მარტივი onboarding-ით, იღებს მიმართულებას და
              სწავლობს სამუშაოს პრაქტიკულ, ყოველდღიურ გარემოში.
            </p>
          </article>
          <article>
            <BriefcaseBusiness size={26} />
            <h3>ზრდის გზა</h3>
            <p>
              მოლარე-კონსულტანტიდან ცვლის უფროსამდე: კარგი კომუნიკაცია,
              პასუხისმგებლობა და სიზუსტე კარიერულ ნაბიჯებად იქცევა.
            </p>
          </article>
          <article>
            <ShieldCheck size={26} />
            <h3>ბრენდის სტანდარტი</h3>
            <p>
              სუფთა სივრცე, პროდუქტის სწორი განლაგება, სწრაფი მომსახურება და
              სტუმრისადმი პოზიტიური დამოკიდებულება WayMart-ის ყოველდღიური ენაა.
            </p>
          </article>
        </div>
        <div className="career-role-cloud" aria-label="Open role areas">
          {roles.map((role) => (
            <span key={role}>
              <BadgeCheck size={15} /> {role}
            </span>
          ))}
        </div>
      </section>

      <section className="career-section career-locations" id="locations">
        <div className="career-section-head">
          <p className="career-eyebrow">ლოკაციები</p>
          <h2>WayMart სივრცეები SOCAR-ის ქსელში.</h2>
          <p>
            გვერდზე ჩამოვთვალეთ საჯაროდ გამოქვეყნებული რამდენიმე ლოკაცია. ყველა
            აქტუალური სადგურის სანახავად კანდიდატს შეუძლია SOCAR-ის რუკაც გამოიყენოს.
          </p>
        </div>
        <div className="career-location-layout">
          <img src={`${media}/socar-waymart-station.png`} alt="SOCAR სადგური WayMart მაღაზიით" />
          <div className="career-location-list">
            {locations.map((location) => (
              <a href={location.map} target="_blank" rel="noopener noreferrer" key={location.title}>
                <MapPin size={20} />
                <span>
                  <b>{location.title}</b>
                  <small>{location.detail}</small>
                </span>
                <ChevronRight size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="career-section career-apply">
        <div>
          <p className="career-eyebrow">შემოუერთდი WayMart-ს</p>
          <h2>ერთი გვერდი, ერთი ემოცია, ერთი მკაფიო next step.</h2>
          <p>
            ნახე გარემო, გაიგე როლი, შეიგრძენი ბრენდი და გადადი განაცხადზე.
            კარიერის გვერდის მთავარი მიზანია კანდიდატმა თავი უკვე გუნდთან ახლოს იგრძნოს.
          </p>
        </div>
        <div className="career-apply-actions">
          <a className="career-primary" href={SELF_URL} target="_blank" rel="noopener noreferrer">
            განაცხადის შევსება <ArrowUpRight size={20} />
          </a>
          <a className="career-secondary" href="/recruit-win?mode=demo">
            ნახე Recruit & Win <Gift size={19} />
          </a>
        </div>
      </section>

      <footer className="career-footer">
        <span>© 2026 WayMart Careers</span>
        <span>
          <MessageCircleHeart size={16} /> კარგი გუნდი იწყება კარგი ამბით.
        </span>
      </footer>
    </main>
  );
}
