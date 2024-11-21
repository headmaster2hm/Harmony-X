'use client'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Input from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import ProfileCard from "@/components/ProfileCard"; // Commented out as it's not used
import { PhoneIcon, MailIcon, XIcon, CheckIcon, Globe } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Icon from './icon.png';
import Logo from './harmony-logo.png';

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "meetNewPeople": "Meet New People!",
          "embraceJourney": "Embrace the journey of finding your soulmate in a world filled with endless possibilities. Join us in the pursuit of genuine connections and let the magic of love lead the way.",
          "beginNow": "Begin Now",
          "onlineDatingExperience": "Have you tried online dating before?",
          "newToIt": "I'm new to it",
          "onceOrTwice": "Once or twice",
          "onlineDatingPro": "I'm an online dating pro",
          "continue": "Continue",
          "gender": "What is your Gender?",
          "female": "Female",
          "male": "Male",
          "preferNotToSay": "I prefer not to say",
          "maritalStatus": "What is your Marital Status?",
          "single": "Single",
          "dating": "Dating",
          "committedRelationship": "In a committed relationship",
          "partneredMarried": "Partnered/Married",
          "divorced": "Divorced",
          "widow": "Widow",
          "interestedIn": "What gender are you interested in?",
          "heterosexual": "Exclusively/Mostly heterosexual",
          "homosexual": "Exclusively/Mostly homosexual",
          "bisexual": "Bisexual",
          "somethingElse": "Something else",
          "age": "How old are you?",
          "agePlaceholder": "Must be 18 and above",
          "findingMatches": "We are finding you matches",
          "matchesFound": "Matches Found!!",
          "matchesFoundDesc": "Congratulations, we have found you 5 matches",
          "fullName": "Your fullname?",
          "fullNamePlaceholder": "Enter your fullname",
          "email": "Your email?",
          "emailPlaceholder": "Enter your email",
          "successMessage": "We will reach out to you via your email or your phone number shortly.",
          "matchedMessage": "You have been successfully matched!",
          "happyDating": "Happy Dating!",
          "okayGreat": "Okay, Great",
          "errorMessage": "Please fill in all required fields before continuing.",
          "languageSelection": "Language Selection",
          "selectLanguage": "Select your preferred language"
        }
      },
      es: {
        translation: {
          "meetNewPeople": "¡Conoce Gente Nueva!",
          "embraceJourney": "Abraza el viaje de encontrar a tu alma gemela en un mundo lleno de posibilidades infinitas. Únete a nosotros en la búsqueda de conexiones genuinas y deja que la magia del amor guíe el camino.",
          "beginNow": "Comienza Ahora",
          "onlineDatingExperience": "¿Has probado las citas en línea antes?",
          "newToIt": "Soy nuevo en esto",
          "onceOrTwice": "Una o dos veces",
          "onlineDatingPro": "Soy un profesional de las citas en línea",
          "continue": "Continuar",
          "gender": "¿Cuál es tu género?",
          "female": "Femenino",
          "male": "Masculino",
          "preferNotToSay": "Prefiero no decirlo",
          "maritalStatus": "¿Cuál es tu estado civil?",
          "single": "Soltero/a",
          "dating": "En citas",
          "committedRelationship": "En una relación comprometida",
          "partneredMarried": "En pareja/Casado/a",
          "divorced": "Divorciado/a",
          "widow": "Viudo/a",
          "interestedIn": "¿En qué género estás interesado/a?",
          "heterosexual": "Exclusivamente/Mayormente heterosexual",
          "homosexual": "Exclusivamente/Mayormente homosexual",
          "bisexual": "Bisexual",
          "somethingElse": "Algo más",
          "age": "¿Cuántos años tienes?",
          "agePlaceholder": "Debe ser mayor de 18 años",
          "findingMatches": "Estamos buscando tus coincidencias",
          "matchesFound": "¡¡Coincidencias Encontradas!!",
          "matchesFoundDesc": "Felicidades, hemos encontrado 5 coincidencias para ti",
          "fullName": "¿Tu nombre completo?",
          "fullNamePlaceholder": "Ingresa tu nombre completo",
          "email": "¿Tu correo electrónico?",
          "emailPlaceholder": "Ingresa tu correo electrónico",
          "successMessage": "Nos pondremos en contacto contigo a través de tu correo electrónico o número de teléfono en breve.",
          "matchedMessage": "¡Has sido emparejado/a exitosamente!",
          "happyDating": "¡Felices citas!",
          "okayGreat": "Está bien, genial",
          "errorMessage": "Por favor, completa todos los campos requeridos antes de continuar.",
          "languageSelection": "Selección de idioma",
          "selectLanguage": "Selecciona tu idioma preferido"
        }
      },
      fr: {
        translation: {
          "meetNewPeople": "Rencontrez de nouvelles personnes !",
          "embraceJourney": "Embrassez le voyage pour trouver votre âme sœur dans un monde rempli de possibilités infinies. Rejoignez-nous dans la quête de connexions authentiques et laissez la magie de l'amour vous guider.",
          "beginNow": "Commencez maintenant",
          "onlineDatingExperience": "Avez-vous déjà essayé les rencontres en ligne ?",
          "newToIt": "Je suis nouveau/nouvelle",
          "onceOrTwice": "Une ou deux fois",
          "onlineDatingPro": "Je suis un pro des rencontres en ligne",
          "continue": "Continuer",
          "gender": "Quel est votre sexe ?",
          "female": "Femme",
          "male": "Homme",
          "preferNotToSay": "Je préfère ne pas dire",
          "maritalStatus": "Quel est votre état civil ?",
          "single": "Célibataire",
          "dating": "En couple",
          "committedRelationship": "En relation sérieuse",
          "partneredMarried": "Marié/Partenaire",
          "divorced": "Divorcé(e)",
          "widow": "Veuf/Veuve",
          "interestedIn": "Quel genre vous intéresse ?",
          "heterosexual": "Exclusivement/Majoritairement hétérosexuel",
          "homosexual": "Exclusivement/Majoritairement homosexuel",
          "bisexual": "Bisexuel(le)",
          "somethingElse": "Autre",
          "age": "Quel âge avez-vous ?",
          "agePlaceholder": "Doit avoir 18 ans et plus",
          "findingMatches": "Nous cherchons des correspondances pour vous",
          "matchesFound": "Correspondances trouvées !!",
          "matchesFoundDesc": "Félicitations, nous avons trouvé 5 correspondances",
          "fullName": "Votre nom complet ?",
          "fullNamePlaceholder": "Entrez votre nom complet",
          "email": "Votre email ?",
          "emailPlaceholder": "Entrez votre email",
          "successMessage": "Nous vous contacterons par email ou téléphone sous peu.",
          "matchedMessage": "Vous avez été jumelé(e) avec succès !",
          "happyDating": "Bonne rencontre !",
          "okayGreat": "D'accord, super",
          "errorMessage": "Veuillez remplir tous les champs requis avant de continuer.",
          "languageSelection": "Sélection de la langue",
          "selectLanguage": "Sélectionnez votre langue préférée"
        }
      },
      de_DE: {
        translation: {
          "meetNewPeople": "Lerne neue Leute kennen!",
          "embraceJourney": "Erleben Sie die Reise, Ihren Seelenverwandten in einer Welt voller endloser Möglichkeiten zu finden. Begleiten Sie uns auf der Suche nach echten Verbindungen und lassen Sie sich von der Magie der Liebe führen.",
          "beginNow": "Jetzt beginnen",
          "onlineDatingExperience": "Haben Sie schon einmal Online-Dating ausprobiert?",
          "newToIt": "Ich bin neu dabei",
          "onceOrTwice": "Einmal oder zweimal",
          "onlineDatingPro": "Ich bin ein Online-Dating-Profi",
          "continue": "Weiter",
          "gender": "Was ist Ihr Geschlecht?",
          "female": "Weiblich",
          "male": "Männlich",
          "preferNotToSay": "Ich möchte es nicht sagen",
          "maritalStatus": "Was ist Ihr Familienstand?",
          "single": "Ledig",
          "dating": "In einer Beziehung",
          "committedRelationship": "In einer festen Beziehung",
          "partneredMarried": "Verheiratet/Partnerschaft",
          "divorced": "Geschieden",
          "widow": "Verwitwet",
          "interestedIn": "An welchem Geschlecht sind Sie interessiert?",
          "heterosexual": "Ausschließlich/Hauptsächlich heterosexuell",
          "homosexual": "Ausschließlich/Hauptsächlich homosexuell",
          "bisexual": "Bisexuell",
          "somethingElse": "Etwas anderes",
          "age": "Wie alt sind Sie?",
          "agePlaceholder": "Muss 18 oder älter sein",
          "findingMatches": "Wir suchen nach passenden Personen für Sie",
          "matchesFound": "Übereinstimmungen gefunden!!",
          "matchesFoundDesc": "Herzlichen Glückwunsch, wir haben 5 Übereinstimmungen gefunden",
          "fullName": "Ihr vollständiger Name?",
          "fullNamePlaceholder": "Geben Sie Ihren vollständigen Namen ein",
          "email": "Ihre E-Mail?",
          "emailPlaceholder": "Geben Sie Ihre E-Mail ein",
          "successMessage": "Wir werden Sie in Kürze per E-Mail oder Telefon kontaktieren.",
          "matchedMessage": "Sie wurden erfolgreich gematcht!",
          "happyDating": "Viel Spaß beim Dating!",
          "okayGreat": "Okay, großartig",
          "errorMessage": "Bitte füllen Sie alle erforderlichen Felder aus, bevor Sie fortfahren.",
          "languageSelection": "Sprachauswahl",
          "selectLanguage": "Wählen Sie Ihre bevorzugte Sprache"
        }
      },
      nl_NL: {
        translation: {
          "meetNewPeople": "Ontmoet nieuwe mensen!",
          "embraceJourney": "Omarm de reis naar het vinden van je soulmate in een wereld vol eindeloze mogelijkheden. Doe mee met onze zoektocht naar echte verbindingen en laat de magie van de liefde de weg wijzen.",
          "beginNow": "Begin nu",
          "onlineDatingExperience": "Heb je al eens online daten geprobeerd?",
          "newToIt": "Ik ben nieuw",
          "onceOrTwice": "Een of twee keer",
          "onlineDatingPro": "Ik ben een online dating professional",
          "continue": "Doorgaan",
          "gender": "Wat is je geslacht?",
          "female": "Vrouw",
          "male": "Man",
          "preferNotToSay": "Ik zeg het liever niet",
          "maritalStatus": "Wat is je burgerlijke staat?",
          "single": "Single",
          "dating": "Aan het daten",
          "committedRelationship": "In een vaste relatie",
          "partneredMarried": "Getrouwd/Partner",
          "divorced": "Gescheiden",
          "widow": "Weduwe/Weduwnaar",
          "interestedIn": "In welk geslacht ben je geïnteresseerd?",
          "heterosexual": "Uitsluitend/Meestal heteroseksueel",
          "homosexual": "Uitsluitend/Meestal homoseksueel",
          "bisexual": "Biseksueel",
          "somethingElse": "Iets anders",
          "age": "Hoe oud ben je?",
          "agePlaceholder": "Moet 18 jaar of ouder zijn",
          "findingMatches": "We zoeken naar overeenkomsten voor je",
          "matchesFound": "Overeenkomsten gevonden!!",
          "matchesFoundDesc": "Gefeliciteerd, we hebben 5 overeenkomsten gevonden",
          "fullName": "Je volledige naam?",
          "fullNamePlaceholder": "Voer je volledige naam in",
          "email": "Je e-mailadres?",
          "emailPlaceholder": "Voer je e-mailadres in",
          "successMessage": "We nemen binnenkort contact met je op via e-mail of telefoon.",
          "matchedMessage": "Je bent succesvol gematcht!",
          "happyDating": "Veel plezier met daten!",
          "okayGreat": "Oké, geweldig",
          "errorMessage": "Vul alle vereiste velden in voordat je verdergaat.",
          "languageSelection": "Taalkeuze",
          "selectLanguage": "Selecteer je voorkeurstaal"
        }
      },
      pt:  {
        translation: {
          "meetNewPeople": "Conheça novas pessoas!",
          "embraceJourney": "Abrace a jornada de encontrar sua alma gêmea em um mundo cheio de possibilidades infinitas. Junte-se a nós na busca por conexões genuínas e deixe a magia do amor guiar o caminho.",
          "beginNow": "Comece agora",
          "onlineDatingExperience": "Você já tentou namorar online antes?",
          "newToIt": "Sou novo nisso",
          "onceOrTwice": "Uma ou duas vezes",
          "onlineDatingPro": "Sou um especialista em encontros online",
          "continue": "Continuar",
          "gender": "Qual é o seu gênero?",
          "female": "Feminino",
          "male": "Masculino",
          "preferNotToSay": "Prefiro não dizer",
          "maritalStatus": "Qual é o seu estado civil?",
          "single": "Solteiro(a)",
          "dating": "Namorando",
          "committedRelationship": "Em um relacionamento sério",
          "partneredMarried": "Casado(a)/Parceiro(a)",
          "divorced": "Divorciado(a)",
          "widow": "Viúvo(a)",
          "interestedIn": "Em qual gênero você está interessado?",
          "heterosexual": "Exclusivamente/Mais frequentemente heterossexual",
          "homosexual": "Exclusivamente/Mais frequentemente homossexual",
          "bisexual": "Bissexual",
          "somethingElse": "Algo diferente",
          "age": "Qual é a sua idade?",
          "agePlaceholder": "Deve ter 18 anos ou mais",
          "findingMatches": "Estamos encontrando combinações para você",
          "matchesFound": "Combinações encontradas!!",
          "matchesFoundDesc": "Parabéns, encontramos 5 combinações",
          "fullName": "Seu nome completo?",
          "fullNamePlaceholder": "Digite seu nome completo",
          "email": "Seu email?",
          "emailPlaceholder": "Digite seu email",
          "successMessage": "Entraremos em contato com você em breve por email ou telefone.",
          "matchedMessage": "Você foi combinado com sucesso!",
          "happyDating": "Feliz namoro!",
          "okayGreat": "Ok, ótimo",
          "errorMessage": "Preencha todos os campos obrigatórios antes de continuar.",
          "languageSelection": "Seleção de idioma",
          "selectLanguage": "Selecione seu idioma preferido"
        }
      },
      it: {
        translation: {
          "meetNewPeople": "Incontra nuove persone!",
          "embraceJourney": "Abbraccia il viaggio alla ricerca della tua anima gemella in un mondo pieno di infinite possibilità. Unisciti a noi nella ricerca di connessioni autentiche e lascia che la magia dell'amore guidi il cammino.",
          "beginNow": "Inizia ora",
          "onlineDatingExperience": "Hai mai provato gli incontri online prima?",
          "newToIt": "Sono nuovo",
          "onceOrTwice": "Una o due volte",
          "onlineDatingPro": "Sono un esperto di incontri online",
          "continue": "Continua",
          "gender": "Qual è il tuo genere?",
          "female": "Femmina",
          "male": "Maschio",
          "preferNotToSay": "Preferisco non dirlo",
          "maritalStatus": "Qual è il tuo stato civile?",
          "single": "Single",
          "dating": "In fase di appuntamenti",
          "committedRelationship": "In una relazione stabile",
          "partneredMarried": "Sposato/a o in coppia",
          "divorced": "Divorziato/a",
          "widow": "Vedovo/a",
          "interestedIn": "In quale genere sei interessato/a?",
          "heterosexual": "Esclusivamente/Principalmente eterosessuale",
          "homosexual": "Esclusivamente/Principalmente omosessuale",
          "bisexual": "Bisessuale",
          "somethingElse": "Qualcos'altro",
          "age": "Quanti anni hai?",
          "agePlaceholder": "Deve essere maggiore di 18 anni",
          "findingMatches": "Stiamo cercando corrispondenze per te",
          "matchesFound": "Corrispondenze trovate!!",
          "matchesFoundDesc": "Congratulazioni, abbiamo trovato 5 corrispondenze per te",
          "fullName": "Il tuo nome completo?",
          "fullNamePlaceholder": "Inserisci il tuo nome completo",
          "email": "La tua email?",
          "emailPlaceholder": "Inserisci la tua email",
          "successMessage": "Ti contatteremo presto via email o telefono.",
          "matchedMessage": "Sei stato abbinato con successo!",
          "happyDating": "Buon divertimento con gli incontri!",
          "okayGreat": "Ok, ottimo",
          "errorMessage": "Per favore, compila tutti i campi obbligatori prima di continuare.",
          "languageSelection": "Selezione della lingua",
          "selectLanguage": "Seleziona la tua lingua preferita"
        }
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });


type Match = {
  name: string;
  age: string;
  distance: string;
  height: string;
  country: string;
  status: string;
  religion: string;
  smoking: string;
  image: string;
  gender: string;
}

type FormData = {
  onlineDatingExperience: string;
  gender: string;
  maritalStatus: string;
  interestedIn: string;
  age: string;
  fullName: string;
  email: string;
}

const preStoredProfiles: Match[] = [
  {
    name: 'Lisa',
    age: '33',
    distance: '58',
    height: "5'6\"",
    country: 'United States',
    status: 'Single',
    religion: 'Christian',
    smoking: 'Does not smoke',
    image: '/images/lisa.png',
    gender: 'female'
  },
  {
    name: 'Ava',
    age: '28',
    distance: '32',
    height: "5'8\"",
    country: 'Canada',
    status: 'Divorced',
    religion: 'Agnostic',
    smoking: 'Occasionally',
    image: '/images/ava.jpg',
    gender: 'female'
  },
  {
    name: 'Sophie',
    age: '26',
    distance: '45',
    height: "5'5\"",
    country: 'Australia',
    status: 'Widowed',
    religion: 'Buddhist',
    smoking: 'Does not smoke',
    image: '/images/sophiee.png',
    gender: 'female'
  },
  {
    name: 'Emma',
    age: '48',
    distance: '42',
    height: "5'4\"",
    country: 'Canada',
    status: 'Single',
    religion: 'Agnostic',
    smoking: 'Occasionally',
    image: '/images/emma.png',
    gender: 'female' 
  },
  {
    name: 'Alexander',
    age: '46',
    distance: '40',
    height: "6'1\"",
    country: 'Germany',
    status: 'Single',
    religion: 'Christian',
    smoking: 'Occasionally',
    image: '/images/alexander.png',
    gender: 'male'
  },
  {
    name: 'Ethan',
    age: '48',
    distance: '25',
    height: "5'10\"",
    country: 'United States',
    status: 'Widowed',
    religion: 'Jewish',
    smoking: 'Does not smoke',
    image: '/images/ethan.png',
    gender: 'male'
  },
  {
    name: 'Liam',
    age: '32 ',
    distance: '30',
    height: "6'0\"",
    country: 'Canada',
    status: 'Divorced',
    religion: 'Agnostic',
    smoking: 'Does not smoke',
    image: '/images/liam.png',
    gender: 'male'
  },
  {
    name: 'Noah',
    age: '42',
    distance: '45',
    height: "6'2\"",
    country: 'Australia',
    status: 'Single',
    religion: 'Buddhist',
    smoking: 'Occasionally',
    image: '/images/noah.png',
    gender: 'male'
  },
  {
    name: 'Oliver',
    age: '30',
    distance: '20',
    height: "5'11\"",
    country: 'France',
    status: 'Widowed',
    religion: 'Catholic',
    smoking: 'Does not smoke',
    image: '/images/oliver.png',
    gender: 'male'
  },
  {
    name: 'Benjamin',
    age: '34',
    distance: '50',
    height: "6'3\"",
    country: 'Italy',
    status: 'Divorced',
    religion: 'Atheist',
    smoking: 'Occasionally',
    image: '/images/benjamin.png',
    gender: 'male'
  },
  {
    name: 'Olivia',
    age: '30',
    distance: '50',
    height: "5'5\"",
    country: 'Australia',
    status: 'Single',
    religion: 'Buddhist',
    smoking: 'Does not smoke',
    image: '/images/olivia.png',
    gender: 'female'
  }
]

export default function Component() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    onlineDatingExperience: '',
    gender: '',
    maritalStatus: '',
    interestedIn: '',
    age: '',
    fullName: '',
    email: '',
  })
  // const [isLoading, setIsLoading] = useState(false); // Commented out as it's not used
  const [matches, setMatches] = useState<Match[]>([])
  const [currentMatch, setCurrentMatch] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [slideIndex, setSlideIndex] = useState(0)
  const [language, setLanguage] = useState('en')
  const [slideImages, setSlideImages] = useState<string[]>([])

  const { t } = useTranslation()

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code.toLowerCase();
        
        // Map country codes to available languages
        const languageMap: { [key: string]: string } = {
          es: 'es',
          fr: 'fr',
          de: 'de_DE',
          nl: 'nl_NL',
          pt: 'pt',
          it: 'it',
        };

        const detectedLanguage = languageMap[countryCode] || 'en';
        await i18n.changeLanguage(detectedLanguage);
        setLanguage(detectedLanguage);
      } catch (error) {
        console.error('Error detecting location:', error);
        // Fallback to default language (English)
        await i18n.changeLanguage('en');
        setLanguage('en');
      }
    };

    detectLocation()
  }, []);

  useEffect(() => {
    if (step === 6) {
      const timer = setTimeout(() => {
        setStep(7)
        setMatches(preStoredProfiles)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [step])

  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?count=8&query=dating,couple&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
        )
        const data = await response.json()
        const imageUrls = data.map((item: { urls: { regular: string } }) => item.urls.regular)
        setSlideImages(imageUrls)
      } catch (error) {
        console.error('Error fetching random images:', error)
        // Fallback to placeholder images if the API call fails
        setSlideImages(Array(8).fill('/placeholder.svg?height=300&width=300'))
      }
    }
  
    fetchRandomImages()
  }, [])

  useEffect(() => {
    const fetchNewImage = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=dating,couple&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
        );
        const data = await response.json()
              const newImageUrl = data.urls.regular
            setSlideImages((prevImages) => [...prevImages.slice(1), newImageUrl])
          } catch (error) {
            console.error('Error fetching new image:', error)
          }
    };
    const interval = setInterval(() => {
      setSlideIndex((prevIndex: number): number => {
        const newIndex = (prevIndex + 1) % slideImages.length;
        // Fetch a new image when the slide index changes
        if (newIndex === 0) {
          fetchNewImage();
        }
        return newIndex;    
        });
    }, 3500);

    return () => clearInterval(interval)
  }, [slideImages]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setError(null)
  }

  const handleContinue = () => {
    if (validateStep()) {
      if (step < 11) {
        setStep(prev => prev + 1)
      }
    } else {
      setError(t('errorMessage'))
    }
  }

  const validateStep = () => {
    switch (step) {
      case 1:
        return !!formData.onlineDatingExperience
      case 2:
        return !!formData.gender
      case 3:
        return !!formData.maritalStatus
      case 4:
        return !!formData.interestedIn
      case 5:
        return !!formData.age && parseInt(formData.age) >= 18
      case 9:
        return !!formData.fullName
      case 10:
        return !!formData.email && /\S+@\S+\.\S+/.test(formData.email)
      default:
        return true
    }
  }

  const handleMatchAction = (action: 'like' | 'dislike') => {
    if (action === 'like') {
      if (currentMatch < preStoredProfiles.length - 1) {
        setCurrentMatch((prev) => prev + 1);
      } else {
        setCurrentMatch(0);
      }
      setStep((prev) => prev + 1);
    } else {
      setCurrentMatch((prev) => (prev + 1) % preStoredProfiles.length);
    }
  };

  const sendResultsToTelegram = async () => {
    try {
      const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
      const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

      if (!botToken || !chatId) {
        console.error('Telegram bot token or chat ID is not set');
        setError('Configuration error. Please try again later.');
        return;
      }

      const text = `New Match:
        Name: ${formData.fullName}
        Email: ${formData.email}
        Age: ${formData.age}
        Gender: ${formData.gender}
        Interested In: ${formData.interestedIn}
        Marital Status: ${formData.maritalStatus}
        Online Dating Experience: ${formData.onlineDatingExperience}`;

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get the error response
        console.error('Failed to send message to Telegram:', errorData); // Log the error
        throw new Error('Failed to send message to Telegram');
      }

      console.log('Results sent to Telegram successfully');
    } catch (error) {
      console.error('Error sending results to Telegram:', error);
      setError('Failed to send results. Please try again.');
    }
  };

  const handleLanguageChange = async (newLanguage: string) => {
    await i18n.changeLanguage(newLanguage)
    setLanguage(newLanguage)
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-start mb-8">
              <div className="flex items-center justify-between w-full mb-4">
                <h1 className="text-5xl font-bold">{t('meetNewPeople')}</h1>
                <Button onClick={handleContinue} className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg">
                  {t('beginNow')}
                </Button>
              </div>
              <p className="text-lg mb-4 max-w-3xl">
                {t('embraceJourney')}
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg">
              <AnimatePresence initial={false}>
                <motion.div
                  key={slideIndex}
                  className="absolute inset-0 flex"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                >
                  {Array.from({ length: 4 }).map((_, i) => {
                    const index = (slideIndex + i) % slideImages.length;
                    return (
                      <div key={index} className="w-1/4 p-1">
                        <Image
                          src={slideImages[index]}
                          alt={`Dating scene ${index + 1}`}
                          width={300}
                          height={300}
                          className="object-cover w-full h-full rounded-lg"
                        />
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )
      case 1:
        return (
          <Card className="w-full shadow-lg mb-8 overflow-hidden">
            <CardContent className="p-6 w-full">
              <div className="flex items-center mb-4">
                <Image src={Icon} alt="Heart Icon" width={24} height={24} className="w-6 h-6 mr-2" />
                <span className="text-xl font-bold">01.</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{t('onlineDatingExperience')}</h2>
              <div className="space-y-2">
                {[t('newToIt'), t('onceOrTwice'), t('onlineDatingPro')].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      id={option}
                      name="onlineDatingExperience"
                      value={option}
                      onChange={(e) => handleInputChange('onlineDatingExperience', e.target.value)}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={option}
                      className={`flex items-center justify-center w-full p-4 border rounded-lg cursor-pointer ${
                        formData.onlineDatingExperience === option
                          ? 'border-red-500 bg-red-50 text-red-500'
                          : 'border-gray-200 hover:border-red-200'
                      }`}
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
              <Button onClick={handleContinue} className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg mt-4">
                {t('continue')}
              </Button>
            </CardContent>
          </Card>
        )
      case 2:
        return (
          <Card className="w-full shadow-lg mb-8 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Image src={Icon} alt="Heart Icon" width={24} height={24} className="w-6 h-6 mr-2" />
                <span className="text-xl font-bold">02.</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{t('gender')}</h2>
              <div className="space-y-2">
                {[t('female'), t('male'), t('preferNotToSay')].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      id={option}
                      name="gender"
                      value={option}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={option}
                      className={`flex items-center justify-center w-full p-4 border rounded-lg cursor-pointer ${
                        formData.gender === option
                          ? 'border-red-500 bg-red-50 text-red-500'
                          : 'border-gray-200 hover:border-red-200'
                      }`}
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
              <Button onClick={handleContinue} className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg mt-4">
                {t('continue')}
              </Button>
            </CardContent>
          </Card>
        )
      case 3:
        return (
          <Card className="w-full shadow-lg mb-8 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Image src={Icon} alt="Heart Icon" width={24} height={24} className="w-6 h-6 mr-2" />
                <span className="text-xl font-bold">03.</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{t('maritalStatus')}</h2>
              <div className="space-y-2">
                {[t('single'), t('dating'), t('committedRelationship'), t('partneredMarried'), t('divorced'), t('widow')].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      id={option}
                      name="maritalStatus"
                      value={option}
                      onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={option}
                      className={`flex items-center justify-center w-full p-4 border rounded-lg cursor-pointer ${
                        formData.maritalStatus === option
                          ? 'border-red-500 bg-red-50 text-red-500'
                          : 'border-gray-200 hover:border-red-200'
                      }`}
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
              <Button onClick={handleContinue} className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg mt-4">
                {t('continue')}
              </Button>
            </CardContent>
          </Card>
        )
      case 4:
        return (
          <Card className="w-full shadow-lg mb-8 overflow-hidden">
            <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                <Image src={Icon} alt="Heart Icon" width={24} height={24} className="w-6 h-6 mr-2" />
                <span className="text-xl font-bold">04.</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{t('interestedIn')}</h2>
              <div className="space-y-2">
                {[t('heterosexual'), t('homosexual'), t('bisexual'), t('somethingElse'), t('preferNotToSay')].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      id={option}
                      name="interestedIn"
                      value={option}
                      onChange={(e) => handleInputChange('interestedIn', e.target.value)}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={option}
                      className={`flex items-center justify-center w-full p-4 border rounded-lg cursor-pointer ${
                        formData.interestedIn === option
                          ? 'border-red-500 bg-red-50 text-red-500'
                          : 'border-gray-200 hover:border-red-200'
                      }`}
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
              <Button onClick={handleContinue} className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg mt-4">
                {t('continue')}
              </Button>
            </CardContent>
          </Card>
        )
      case 5:
        return (
          <Card className="w-full shadow-lg mb-8 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Image src={Icon} alt="Heart Icon" width={24} height={24} className="w-6 h-6 mr-2" />
                <span className="text-xl font-bold">05.</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{t('age')}</h2>
              <Input
                type="number"
                placeholder={t('agePlaceholder')}
                onChange={(e) => handleInputChange('age', e.target.value)}
                min="18"
                className="w-full p-4 border rounded-lg mb-4"
              />
              <Button onClick={handleContinue} className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg">
                {t('continue')}
              </Button>
            </CardContent>
          </Card>
        )
      case 6:
        return (
          <Card className="w-full shadow-lg mb-8 overflow-hidden">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-xl font-semibold">{t('findingMatches')}</p>
            </CardContent>
          </Card>
        )
      case 7:
        return (
          <Card className="w-full shadow-lg mb-8 overflow-hidden">
            <CardContent className="text-center p-6">
              <Image src="/images/hoorays.gif" alt="Hooray" className="mx-auto mb-4" width={100} height={100} />
              <h2 className="text-2xl font-bold mb-4">{t('matchesFound')}</h2>
              <p className="mb-6">{t('matchesFoundDesc', { count: matches.length })}</p>
              <Button onClick={handleContinue} className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg">
                {t('continue')}
              </Button>
            </CardContent>
          </Card>
        )
      case 8:
        const currentProfile = preStoredProfiles[currentMatch];
        const imageUrl = currentProfile.image || '/placeholder.svg'; // Fallback to placeholder if image is missing
        return (
          <Card className="w-full shadow-lg mb-8 overflow-hidden">
            <CardContent className="flex p-6 w-full">
              <div className="flex-none pr-4">
                <Image
                  src={imageUrl} // Use the fallback image URL
                  alt={currentProfile.name}
                  width={400} // Set width to 400
                  height={400} // Set height to 400
                  className="object-cover w-400 h-400" // Ensure the image covers the area without distortion
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">{currentProfile.name} 🌟</h2>
                <p className="text-lg mb-1"><strong>Age:</strong> {currentProfile.age} years old</p>
                <p className="text-lg mb-1"><strong>Distance:</strong> {currentProfile.distance} miles away 🌍</p>
                <p className="text-lg mb-1"><strong>Height:</strong> {currentProfile.height} </p>
                <p className="text-lg mb-1"><strong>Country:</strong> {currentProfile.country} 🇺🇸</p>
                <p className="text-lg mb-1"><strong>Status:</strong> {currentProfile.status} ❤️</p>
                <p className="text-lg mb-1"><strong>Religion:</strong> {currentProfile.religion} ⛪</p>
                <p className="text-lg mb-1"><strong>Smoking:</strong> {currentProfile.smoking} 🚭</p>
                <p className="text-lg mb-1"><strong>Gender:</strong> {currentProfile.gender} 🚻</p>
              </div>
            </CardContent>
            <div className="flex justify-between p-6 bg-white">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => handleMatchAction('dislike')} 
                className="w-16 h-16 rounded-full bg-red-100 hover:bg-red-200" 
                key={`dislike-${currentMatch}`}
              >
                <XIcon className="h-8 w-8 text-red-500" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => handleMatchAction('like')} 
                className="w-16 h-16 rounded-full bg-green-100 hover:bg-green-200" 
                key={`like-${currentMatch}`}
              >
                <CheckIcon className="h-8 w-8 text-green-500" />
              </Button>
            </div>
          </Card>
        )
      case 9:
        return (
          <Card className="w-full shadow-lg mb-8 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Image src={Icon} alt="Heart Icon" width={24} height={24} className="w-6 h-6 mr-2" />
                <span className="text-xl font-bold">09.</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{t('fullName')}</h2>
              <Input
                placeholder={t('fullNamePlaceholder')}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full p-4 border rounded-lg mb-4"
              />
              <Button onClick={handleContinue} className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg">
                {t('continue')}
              </Button>
            </CardContent>
          </Card>
        )
      case 10:
        return (
          <Card className="w-full shadow-lg mb-8 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Image src={Icon} alt="Heart Icon" width={24} height={24} className="w-6 h-6 mr-2" />
                <span className="text-xl font-bold">10.</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{t('email')}</h2>
              <Input
                type="email"
                placeholder={t('emailPlaceholder')}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full p-4 border rounded-lg mb-4"
              />
              <Button onClick={handleContinue} className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg">
                {t('continue')}
              </Button>
            </CardContent>
          </Card>
        )
      case 11:
        return (
          <Card className="w-full shadow-lg mb-8 overflow-hidden">
            <CardContent className="text-center p-6">
              <Image src="/harmony-logo.png" alt="Harmony X Heart" className="mx-auto mb-4" width={100} height={50} />
              <p className="mb-2">{t('successMessage')}</p>
              <p className="mb-2">{t('matchedMessage')}</p>
              <p className="mb-6">{t('happyDating')}</p>
              <Button onClick={async () => {
                await sendResultsToTelegram(); // Send results to Telegram
                setStep(0); // Reset to the first step
              }} className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg">
                {t('okayGreat')}
              </Button>
            </CardContent>
          </Card>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src={Logo} 
              alt="Harmony Logo" 
              width={100}  // Changed from 32
              height={50}  // Changed from 32
              className="w-[100px] h-[50px] object-contain"  // Changed from w-8 h-8
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="bg-red-50">
              <PhoneIcon className="h-5 w-5 text-red-500" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-red-50">
              <MailIcon className="h-5 w-5 text-red-500" />
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="bg-red-50">
                  <Globe className="h-5 w-5 text-red-500" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{t('languageSelection')}</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <h3 className="mb-4 text-lg font-medium">{t('selectLanguage')}</h3>
                  <RadioGroup value={language} onValueChange={handleLanguageChange}>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="en" id="en" />
                      <Label htmlFor="en">English</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="es" id="es" />
                      <Label htmlFor="es">Español</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="fr" id="fr" />
                      <Label htmlFor="fr">Français</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="de_DE" id="de_DE" />
                      <Label htmlFor="de_DE">Deutsch</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nl_NL" id="nl_NL" />
                      <Label htmlFor="nl_NL">Nederlands</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="pt" id="pt" />
                      <Label htmlFor="pt">Português</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="it" id="it" />
                      <Label htmlFor="it">Italiano</Label>
                    </div>
                  </RadioGroup>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center bg-white py-8 max-h-screen overflow-hidden">
        <div className="w-full max-w-4xl max-h-full overflow-y-auto">
          {renderStep()}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center text-sm text-gray-500">
          <span>© HarmonyXHeart 2024</span>
          <span className="text-red-500">info@harmonyxheart.com</span>
          <span>All Rights Reserved</span>
        </div>
      </footer>

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
    </div>
  )
}
