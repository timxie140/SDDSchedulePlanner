class Courses {
    constructor() {
      if (Courses.instance) {
        return Courses.instance;
      }

      this.courseData = {
          ADMN: {
            '90432': {
              daysTimes: [],
              id: 'ADMN-6400',
              sec: '01',
              rem: 0,
              title: 'Grad Final Administrative Reg',
              instructor: 'TBA'
            },
            '92048': {
              daysTimes: [],
              id: 'ADMN-6700',
              sec: '01',
              rem: 40,
              title: 'Academic Orientation Seminar For Graduate Students',
              instructor: 'Constance M Grega'
            },
            '92049': {
              daysTimes: [],
              id: 'ADMN-6800',
              sec: '01',
              rem: 200,
              title: 'Ta Training Seminar',
              instructor: 'Dorit Nevo'
            },
            '93055': {
              daysTimes: [],
              id: 'ADMN-6700',
              sec: 'H01',
              rem: 30,
              title: 'Academic Orientation Seminar For Graduate Students',
              instructor: 'Claude Beaumier Abbott'
            },
            '93254': {
              daysTimes: [ [ 'T', { start: 1600, end: 1650 } ] ],
              id: 'ADMN-1962',
              sec: '02',
              rem: 15,
              title: 'Fip Seminar',
              instructor: 'Janelle P. Fayette'
            },
            '93257': {
              daysTimes: [ [ 'M', { start: 1600, end: 1650 } ] ],
              id: 'ADMN-1962',
              sec: '05',
              rem: 15,
              title: 'Fip Seminar',
              instructor: 'Nanjie Caihua'
            },
            '93258': {
              daysTimes: [ [ 'W', { start: 1600, end: 1650 } ] ],
              id: 'ADMN-1962',
              sec: '06',
              rem: 15,
              title: 'Fip Seminar',
              instructor: 'William Charles Woodward'
            },
            '93259': {
              daysTimes: [ [ 'W', { start: 1600, end: 1650 } ] ],
              id: 'ADMN-1962',
              sec: '09',
              rem: 15,
              title: 'Fip Seminar',
              instructor: 'David W. Milford'
            },
            '93260': {
              daysTimes: [ [ 'T', { start: 1600, end: 1650 } ] ],
              id: 'ADMN-1962',
              sec: '10',
              rem: 15,
              title: 'Fip Seminar',
              instructor: 'Jeannie Steigler'
            },
            '93261': {
              daysTimes: [ [ 'W', { start: 1700, end: 1750 } ] ],
              id: 'ADMN-1962',
              sec: '11',
              rem: 15,
              title: 'Fip Seminar',
              instructor: 'William Charles Woodward'
            },
            '93264': {
              daysTimes: [ [ 'T', { start: 1700, end: 1750 } ] ],
              id: 'ADMN-1962',
              sec: '14',
              rem: 15,
              title: 'Fip Seminar',
              instructor: 'Janelle P. Fayette'
            },
            '93265': {
              daysTimes: [ [ 'W', { start: 1700, end: 1750 } ] ],
              id: 'ADMN-1962',
              sec: '15',
              rem: 15,
              title: 'Fip Seminar',
              instructor: 'David W. Milford'
            },
            '93305': {
              daysTimes: [ [ 'M', { start: 1700, end: 1750 } ] ],
              id: 'ADMN-1962',
              sec: '17',
              rem: 15,
              title: 'Fip Seminar',
              instructor: 'Nanjie Caihua'
            },
            '93553': {
              daysTimes: [ [ 'W', { start: 1200, end: 1250 } ] ],
              id: 'ADMN-1962',
              sec: '21',
              rem: 15,
              title: 'Fip Seminar',
              instructor: 'Jeannie Steigler'
            },
            '93554': {
              daysTimes: [ [ 'M', { start: 1900, end: 1950 } ] ],
              id: 'ADMN-1962',
              sec: '22',
              rem: 15,
              title: 'Fip Seminar',
              instructor: 'Arielle Serena Roberts'
            },
            '93629': {
              daysTimes: [ [ 'T', { start: 1600, end: 1650 } ] ],
              id: 'ADMN-1824',
              sec: '01',
              rem: 150,
              title: 'Student Success Labs',
              instructor: 'Joseph Louis Trzepacz'
            },
            '93773': {
              daysTimes: [],
              id: 'ADMN-1030',
              sec: '02',
              rem: 1000,
              title: 'Arch Exp & Plan Architecture',
              instructor: 'Erika Cary, Emily A. Seils'
            },
            '93777': {
              daysTimes: [ [ 'T', { start: 1600, end: 1700 } ] ],
              id: 'ADMN-1962',
              sec: '24',
              rem: 15,
              title: 'Fip Seminar',
              instructor: 'Lydie Kengne'
            },
            '93950': {
              daysTimes: [],
              id: 'ADMN-1100',
              sec: '02',
              rem: 65,
              title: 'Portfolio Development',
              instructor: 'Matthew Joseph Lopez'
            },
            '93972': {
              daysTimes: [],
              id: 'ADMN-1030',
              sec: '01',
              rem: 1000,
              title: 'Arch Exp & Plan Architecture',
              instructor: 'Erika Cary, Emily A. Seils'
            },
            '93973': {
              daysTimes: [],
              id: 'ADMN-1030',
              sec: '03',
              rem: 1000,
              title: 'Arch Exp & Plan Architecture',
              instructor: 'Erika Cary, Emily A. Seils'
            },
            '93974': {
              daysTimes: [],
              id: 'ADMN-1030',
              sec: '04',
              rem: 1000,
              title: 'Arch Exp & Plan Architecture',
              instructor: 'Erika Cary, Emily A. Seils'
            },
            '93975': {
              daysTimes: [],
              id: 'ADMN-1030',
              sec: '05',
              rem: 1000,
              title: 'Arch Exp & Plan Architecture',
              instructor: 'Erika Cary, Emily A. Seils'
            },
            '93976': {
              daysTimes: [],
              id: 'ADMN-1030',
              sec: '06',
              rem: 1000,
              title: 'Arch Exp & Plan Architecture',
              instructor: 'Erika Cary, Emily A. Seils'
            },
            '94415': {
              daysTimes: [],
              id: 'ADMN-1030',
              sec: '07',
              rem: 1000,
              title: 'Arch Exp & Plan Architecture',
              instructor: 'Erika Cary, Emily A. Seils'
            },
            '94633': {
              daysTimes: [],
              id: 'ADMN-6700',
              sec: 'H02',
              rem: 40,
              title: 'Academic Orientation Seminar For Graduate Students',
              instructor: 'Thomas M. Abbott'
            },
            '94673': {
              daysTimes: [],
              id: 'ADMN-1962',
              sec: '25',
              rem: 15,
              title: 'Fip Seminar',
              instructor: 'Alisha Wein'
            },
            '94711': {
              daysTimes: [],
              id: 'ADMN-6960',
              sec: '01',
              rem: 0,
              title: 'Topics Course In Admn',
              instructor: 'Dorit Nevo'
            }
          },
          USAF: {
            '90003': {
              daysTimes: [ [ 'R', { start: 900, end: 950 } ] ],
              id: 'USAF-2040',
              sec: '01',
              rem: 30,
              title: 'Aerospace Studies 200b',
              instructor: 'Kristen Gibson, Jake L Miller'
            },
            '90004': {
              daysTimes: [ [ 'F', { start: 700, end: 950 } ] ],
              id: 'USAF-2060',
              sec: '01',
              rem: 30,
              title: 'Aerospace Studies 300b',
              instructor: 'Jake L Miller'
            },
            '90005': {
              daysTimes: [ [ 'W', { start: 700, end: 950 } ] ],
              id: 'USAF-2080',
              sec: '01',
              rem: 30,
              title: 'Aerospace Studies 400b',
              instructor: 'Max Sharkey Lipeles'
            },
            '90064': {
              daysTimes: [ [ 'T', { start: 800, end: 950 } ] ],
              id: 'USAF-0020',
              sec: '01',
              rem: 80,
              title: 'Leadership Lab',
              instructor: 'Max Sharkey Lipeles'
            },
            '90085': {
              daysTimes: [ [ 'R', { start: 800, end: 850 } ] ],
              id: 'USAF-1020',
              sec: '02',
              rem: 30,
              title: 'Aerospace Studies 100b',
              instructor: 'Charles DeUnta Gresham, Jake L Miller'
            }
          },
          ARCH: {
            '90100': {
              daysTimes: [
                [ 'T', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1800, end: 1850 } ]
              ],
              id: 'ARCH-4540',
              sec: '01',
              rem: 30,
              title: 'Professional Practice 1',
              instructor: 'Katrina Pacheco'
            },
            '90331': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'ARCH-2360',
              sec: '01',
              rem: 90,
              title: 'Environmental And Ecol System',
              instructor: 'Michael Todd Stradley'
            },
            '90332': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'ARCH-4740',
              sec: '01',
              rem: 50,
              title: 'Bldg Systems And Environment',
              instructor: 'John Clifford Loercher'
            },
            '90379': {
              daysTimes: [ [ 'W', { start: 900, end: 1050 } ] ],
              id: 'ARCH-6880',
              sec: '01',
              rem: 20,
              title: 'Sonics Research Lab 2',
              instructor: 'Ning Xiang'
            },
            '90441': {
              daysTimes: [],
              id: 'ARCH-6940',
              sec: '00',
              rem: 0,
              title: 'Adv Ind Proj In Arch/env Desgn',
              instructor: ''
            },
            '90442': {
              daysTimes: [],
              id: 'ARCH-6990',
              sec: '01',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Ning Xiang'
            },
            '90443': {
              daysTimes: [],
              id: 'ARCH-6990',
              sec: '02',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Jonas Braasch'
            },
            '90499': {
              daysTimes: [ [ 'M', { start: 1000, end: 1150 } ] ],
              id: 'ARCH-9990',
              sec: '80',
              rem: 10,
              title: 'Architecture Dissertation',
              instructor: 'Alexandros Tsamis'
            },
            '91067': {
              daysTimes: [],
              id: 'ARCH-9990',
              sec: '04',
              rem: 10,
              title: 'Architecture Dissertation',
              instructor: 'Nadarajah Narendran'
            },
            '91082': {
              daysTimes: [],
              id: 'ARCH-9990',
              sec: '03',
              rem: 10,
              title: 'Architecture Dissertation',
              instructor: 'Jonas Braasch'
            },
            '91289': {
              daysTimes: [],
              id: 'ARCH-9990',
              sec: '02',
              rem: 10,
              title: 'Architecture Dissertation',
              instructor: 'Ning Xiang'
            },
            '91446': {
              daysTimes: [ [ 'F', { start: 1400, end: 1750 } ] ],
              id: 'ARCH-4850',
              sec: '01',
              rem: 15,
              title: 'Architectural Acoustics 2',
              instructor: 'David William Kahn'
            },
            '91861': {
              daysTimes: [ [ 'T', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-6890',
              sec: '01',
              rem: 15,
              title: 'Aural Architecture',
              instructor: 'Jonas Braasch'
            },
            '91862': {
              daysTimes: [ [ 'T', { start: 1200, end: 1250 } ] ],
              id: 'ARCH-6830',
              sec: '01',
              rem: 10,
              title: 'Graduate Thesis Seminar:acoustics',
              instructor: 'Ning Xiang'
            },
            '92062': {
              daysTimes: [ [ 'F', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-4936',
              sec: '80',
              rem: 20,
              title: 'Res Investigations: Projbuilt',
              instructor: 'Joshua William Hugo Draper'
            },
            '92347': {
              daysTimes: [ [ 'W', { start: 1430, end: 1620 } ] ],
              id: 'ARCH-6900',
              sec: '80',
              rem: 10,
              title: 'Graduate Thesis Seminar',
              instructor: 'Tulay Atak'
            },
            '92374': {
              daysTimes: [ [ 'F', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-6980',
              sec: '80',
              rem: 10,
              title: "Master's Project",
              instructor: 'Alexandros Tsamis'
            },
            '92495': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'ARCH-4020',
              sec: '01',
              rem: 10,
              title: 'Bedford Seminar',
              instructor: 'James Norman Richardson'
            },
            '92618': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'ARCH-2370',
              sec: '01',
              rem: 90,
              title: 'Energy, Comfort & Ecology',
              instructor: 'John Clifford Loercher'
            },
            '92619': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1600, end: 1750 } ]
              ],
              id: 'ARCH-2810',
              sec: '01',
              rem: 85,
              title: 'Architectural Design Studio 2',
              instructor: 'Matthew Joseph Lopez'
            },
            '92620': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'ARCH-2810',
              sec: '02',
              rem: 20,
              title: 'Architectural Design Studio 2',
              instructor: 'Matthew Joseph Lopez'
            },
            '92621': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'ARCH-2810',
              sec: '04',
              rem: 20,
              title: 'Architectural Design Studio 2',
              instructor: 'Claire Eileen Moriarty'
            },
            '92622': {
              daysTimes: [ [ 'W', { start: 1400, end: 1550 } ] ],
              id: 'ARCH-2530',
              sec: '01',
              rem: 90,
              title: 'Digital Constructs 2',
              instructor: 'Adam Hassan Dayem'
            },
            '92623': {
              daysTimes: [ [ 'T', { start: 1800, end: 1950 } ] ],
              id: 'ARCH-4550',
              sec: '01',
              rem: 60,
              title: 'Professional Practice 2',
              instructor: 'David Jonathon Pacheco'
            },
            '92647': {
              daysTimes: [],
              id: 'ARCH-6910',
              sec: '02',
              rem: 5,
              title: 'Doctoral Seminar 1',
              instructor: 'Nadarajah Narendran'
            },
            '92648': {
              daysTimes: [],
              id: 'ARCH-6920',
              sec: '02',
              rem: 5,
              title: 'Doctoral Seminar 2',
              instructor: 'Nadarajah Narendran'
            },
            '92650': {
              daysTimes: [ [ 'T', { start: 1000, end: 1150 } ] ],
              id: 'ARCH-4090',
              sec: '01',
              rem: 90,
              title: 'Architectural Case Studies',
              instructor: 'Yael Erel'
            },
            '92651': {
              daysTimes: [ [ 'M', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-4580',
              sec: '80',
              rem: 20,
              title: 'Materials Systems & Production',
              instructor: 'Joshua William Hugo Draper'
            },
            '92935': {
              daysTimes: [
                [ 'M', { start: 1430, end: 1820 } ],
                [ 'R', { start: 1430, end: 1820 } ]
              ],
              id: 'ARCH-4770',
              sec: '80',
              rem: 5,
              title: 'Architectural Design Studio 5',
              instructor: 'James Fleet Hower'
            },
            '92969': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1600, end: 1750 } ]
              ],
              id: 'ARCH-2830',
              sec: '01',
              rem: 85,
              title: 'Architectural Design Studio 4',
              instructor: 'Adam Hassan Dayem'
            },
            '92970': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'ARCH-2830',
              sec: '02',
              rem: 15,
              title: 'Architectural Design Studio 4',
              instructor: 'Adam Hassan Dayem'
            },
            '92971': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-4770',
              sec: '01',
              rem: 30,
              title: 'Architectural Design Studio 5',
              instructor: 'Matt Burgermaster'
            },
            '92976': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-2830',
              sec: '03',
              rem: 15,
              title: 'Architectural Design Studio 4',
              instructor: 'David H Bell'
            },
            '92977': {
              daysTimes: [ [ 'W', { start: 1400, end: 1550 } ] ],
              id: 'ARCH-2550',
              sec: '01',
              rem: 80,
              title: 'Digital Constructs 4',
              instructor: 'Matthew Joseph Lopez'
            },
            '93003': {
              daysTimes: [ [ 'R', { start: 1200, end: 1350 } ] ],
              id: 'ARCH-4969',
              sec: '01',
              rem: 10,
              title: 'Relationship Btwn Film & Arch',
              instructor: 'Anthony Titus'
            },
            '93047': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-2830',
              sec: '05',
              rem: 15,
              title: 'Architectural Design Studio 4',
              instructor: 'Edwin Jhinang Liu'
            },
            '93050': {
              daysTimes: [ [ 'M', { start: 1000, end: 1150 } ] ],
              id: 'ARCH-9990',
              sec: '01',
              rem: 10,
              title: 'Architecture Dissertation',
              instructor: 'Dennis Robert Shelden'
            },
            '93165': {
              daysTimes: [],
              id: 'ARCH-6910',
              sec: '01',
              rem: 5,
              title: 'Doctoral Seminar 1',
              instructor: 'TBA'
            },
            '93167': {
              daysTimes: [ [ 'T', { start: 1800, end: 1950 } ] ],
              id: 'ARCH-5390',
              sec: '01',
              rem: 5,
              title: 'Professional Practice 2',
              instructor: 'Adam Francis Petela'
            },
            '93174': {
              daysTimes: [
                [ 'W', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-6948',
              sec: '01',
              rem: 1,
              title: 'Graduate Final Project',
              instructor: 'Carla Leitao'
            },
            '93189': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-2810',
              sec: '03',
              rem: 20,
              title: 'Architectural Design Studio 2',
              instructor: 'Kyle Reese Troyer'
            },
            '93190': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-2810',
              sec: '05',
              rem: 15,
              title: 'Architectural Design Studio 2',
              instructor: 'Riley Studebaker'
            },
            '93192': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-4830',
              sec: '01',
              rem: 60,
              title: 'Integrated Design Development Studio',
              instructor: 'Lonn J. Combs'
            },
            '93193': {
              daysTimes: [
                [ 'W', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-4920',
              sec: '01',
              rem: 60,
              title: 'Final Project Design Studio',
              instructor: 'Carla Leitao'
            },
            '93194': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-4920',
              sec: '02',
              rem: 20,
              title: 'Final Project Design Studio',
              instructor: 'Christopher S Perry'
            },
            '93195': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-4920',
              sec: '03',
              rem: 20,
              title: 'Final Project Design Studio',
              instructor: 'Hseng Tai Ja Reng Lintner'
            },
            '93196': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-4920',
              sec: '04',
              rem: 20,
              title: 'Final Project Design Studio',
              instructor: 'Ryosuke Imaeda'
            },
            '93217': {
              daysTimes: [ [ 'W', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-4150',
              sec: '01',
              rem: 90,
              title: 'Contemporary Design Approaches',
              instructor: 'Carla Leitao'
            },
            '93447': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'ARCH-4100',
              sec: '01',
              rem: 90,
              title: 'An Architectural Genealogy',
              instructor: 'David H Bell'
            },
            '93448': {
              daysTimes: [ [ 'R', { start: 1200, end: 1350 } ] ],
              id: 'ARCH-4520',
              sec: '01',
              rem: 15,
              title: 'Construction Industry Semr 2',
              instructor: 'Per S. Svedberg'
            },
            '93449': {
              daysTimes: [ [ 'M', { start: 1200, end: 1350 } ] ],
              id: 'ARCH-4590',
              sec: '01',
              rem: 40,
              title: 'Entrepreneurship &architecture',
              instructor: 'Alec Walker, Daniel Stratford'
            },
            '93450': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-4780',
              sec: '01',
              rem: 30,
              title: 'Architectural Design Studio 6',
              instructor: 'Matt Burgermaster'
            },
            '93451': {
              daysTimes: [
                [ 'M', { start: 1430, end: 1820 } ],
                [ 'R', { start: 1430, end: 1820 } ]
              ],
              id: 'ARCH-4780',
              sec: '80',
              rem: 15,
              title: 'Architectural Design Studio 6',
              instructor: 'James Fleet Hower'
            },
            '93452': {
              daysTimes: [ [ 'T', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-4880',
              sec: '01',
              rem: 20,
              title: 'Aural Architecture',
              instructor: 'Jonas Braasch'
            },
            '93453': {
              daysTimes: [ [ 'T', { start: 1300, end: 1600 } ] ],
              id: 'ARCH-4960',
              sec: '80',
              rem: 12,
              title: 'Intense Ornamnt 3d Printed Mtl',
              instructor: 'Dennis Robert Shelden'
            },
            '93469': {
              daysTimes: [ [ 'F', { start: 1200, end: 1320 } ] ],
              id: 'ARCH-4962',
              sec: '01',
              rem: 10,
              title: 'The Art Of Structure',
              instructor: 'Justin Henry Den Herder'
            },
            '93487': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1550, end: 1750 } ]
              ],
              id: 'ARCH-2830',
              sec: '04',
              rem: 15,
              title: 'Architectural Design Studio 4',
              instructor: 'David H Bell'
            },
            '93705': {
              daysTimes: [
                [ 'M', { start: 1430, end: 1820 } ],
                [ 'R', { start: 1430, end: 1820 } ]
              ],
              id: 'ARCH-6360',
              sec: '80',
              rem: 10,
              title: 'Interdisciplinary Research Studio',
              instructor: 'Alexandros Tsamis'
            },
            '93706': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-6980',
              sec: '81',
              rem: 5,
              title: "Master's Project",
              instructor: 'Christopher S Perry'
            },
            '93709': {
              daysTimes: [ [ 'F', { start: 1400, end: 1700 } ] ],
              id: 'ARCH-6330',
              sec: '80',
              rem: 20,
              title: 'Built Ecologies 2',
              instructor: 'Emir Aykut Pekdemir'
            },
            '93710': {
              daysTimes: [ [ 'F', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-6990',
              sec: '80',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Alexandros Tsamis'
            },
            '93711': {
              daysTimes: [ [ 'R', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-4952',
              sec: '80',
              rem: 20,
              title: 'Systems Prototyping',
              instructor: 'James Fleet Hower'
            },
            '93750': {
              daysTimes: [ [ 'T', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-6961',
              sec: '80',
              rem: 12,
              title: 'Geo-actors II',
              instructor: 'Cathryn M Dwyre'
            },
            '93778': {
              daysTimes: [ [ 'R', { start: 1800, end: 1950 } ] ],
              id: 'ARCH-6920',
              sec: '03',
              rem: 10,
              title: 'Doctoral Seminar 2',
              instructor: 'Jonas Braasch'
            },
            '93779': {
              daysTimes: [ [ 'R', { start: 1800, end: 1950 } ] ],
              id: 'ARCH-6910',
              sec: '03',
              rem: 10,
              title: 'Doctoral Seminar 1',
              instructor: 'Jonas Braasch'
            },
            '93951': {
              daysTimes: [ [ 'W', { start: 1600, end: 1750 } ] ],
              id: 'ARCH-2550',
              sec: '02',
              rem: 20,
              title: 'Digital Constructs 4',
              instructor: 'Edwin Jhinang Liu'
            },
            '93952': {
              daysTimes: [ [ 'T', { start: 1000, end: 1150 } ] ],
              id: 'ARCH-4090',
              sec: '02',
              rem: 24,
              title: 'Architectural Case Studies',
              instructor: 'Leandro Piazzi'
            },
            '93953': {
              daysTimes: [ [ 'W', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-4150',
              sec: '02',
              rem: 30,
              title: 'Contemporary Design Approaches',
              instructor: 'Emily Gruendel'
            },
            '93955': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-4830',
              sec: '02',
              rem: 15,
              title: 'Integrated Design Development Studio',
              instructor: 'Arta Yazdanseta'
            },
            '93956': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-4830',
              sec: '03',
              rem: 15,
              title: 'Integrated Design Development Studio',
              instructor: 'Michael Todd Stradley'
            },
            '93967': {
              daysTimes: [ [ 'T', { start: 1000, end: 1150 } ] ],
              id: 'ARCH-6920',
              sec: '04',
              rem: 10,
              title: 'Doctoral Seminar 2',
              instructor: 'Alexandros Tsamis'
            },
            '94023': {
              daysTimes: [ [ 'R', { start: 1200, end: 1350 } ] ],
              id: 'ARCH-6969',
              sec: '01',
              rem: 5,
              title: 'Relationship Btwn Film & Arch',
              instructor: 'Anthony Titus'
            },
            '94113': {
              daysTimes: [ [ 'T', { start: 1000, end: 1150 } ] ],
              id: 'ARCH-4090',
              sec: '03',
              rem: 24,
              title: 'Architectural Case Studies',
              instructor: 'Per S. Svedberg'
            },
            '94114': {
              daysTimes: [ [ 'T', { start: 1000, end: 1150 } ] ],
              id: 'ARCH-4090',
              sec: '04',
              rem: 24,
              title: 'Architectural Case Studies',
              instructor: 'Benjamin Vanmuysen'
            },
            '94116': {
              daysTimes: [ [ 'W', { start: 1600, end: 1750 } ] ],
              id: 'ARCH-2530',
              sec: '02',
              rem: 20,
              title: 'Digital Constructs 2',
              instructor: 'Caleb White'
            },
            '94118': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'ARCH-4200',
              sec: '01',
              rem: 20,
              title: 'Portfolio Development',
              instructor: 'Matthew Joseph Lopez'
            },
            '94119': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'ARCH-4200',
              sec: '02',
              rem: 20,
              title: 'Portfolio Development',
              instructor: 'Claire Eileen Moriarty'
            },
            '94120': {
              daysTimes: [ [ 'R', { start: 1000, end: 1150 } ] ],
              id: 'ARCH-6810',
              sec: '01',
              rem: 10,
              title: 'Research Design Seminar',
              instructor: 'Ning Xiang'
            },
            '94243': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'ARCH-4530',
              sec: '01',
              rem: 1,
              title: 'Building Sciences Capstone',
              instructor: 'John Clifford Loercher'
            },
            '94244': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ARCH-4330',
              sec: '01',
              rem: 10,
              title: 'Structures 2',
              instructor: 'Marc Anthony Tatarsky'
            },
            '94286': {
              daysTimes: [ [ 'T', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-4967',
              sec: '80',
              rem: 12,
              title: 'Artif. Intel. Imagining Arch',
              instructor: 'Cathryn M Dwyre'
            },
            '94288': {
              daysTimes: [ [ 'F', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-6980',
              sec: '01',
              rem: 10,
              title: "Master's Project",
              instructor: 'Dennis Robert Shelden'
            },
            '94289': {
              daysTimes: [],
              id: 'ARCH-6990',
              sec: '03',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Dennis Robert Shelden'
            },
            '94290': {
              daysTimes: [ [ 'T', { start: 1000, end: 1150 } ] ],
              id: 'ARCH-6810',
              sec: '80',
              rem: 10,
              title: 'Research Design Seminar',
              instructor: 'Joshua William Hugo Draper'
            },
            '94292': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-4965',
              sec: '01',
              rem: 12,
              title: 'Lighting Workshop',
              instructor: 'Nadarajah Narendran, Jean Paul Freyssinier, Ukwatte Lokuliyanage Indika Upendra Perera'
            },
            '94293': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-6965',
              sec: '01',
              rem: 5,
              title: 'Lighting Workshop',
              instructor: 'Nadarajah Narendran, Jean Paul Freyssinier, Ukwatte Lokuliyanage Indika Upendra Perera'
            },
            '94304': {
              daysTimes: [ [ 'W', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-4970',
              sec: '80',
              rem: 13,
              title: 'Urban Data II',
              instructor: 'James Fleet Hower'
            },
            '94305': {
              daysTimes: [ [ 'W', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-6962',
              sec: '80',
              rem: 10,
              title: 'Urban Data II',
              instructor: 'James Fleet Hower'
            },
            '94307': {
              daysTimes: [ [ 'T', { start: 1300, end: 1600 } ] ],
              id: 'ARCH-6966',
              sec: '80',
              rem: 10,
              title: 'Design Programming 2',
              instructor: 'Dennis Robert Shelden'
            },
            '94308': {
              daysTimes: [ [ 'T', { start: 1535, end: 1825 } ] ],
              id: 'ARCH-4971',
              sec: '80',
              rem: 14,
              title: 'Parametrics Of The Environment',
              instructor: 'Charles A. Portelli'
            },
            '94369': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'ARCH-2370',
              sec: '02',
              rem: 40,
              title: 'Energy, Comfort & Ecology',
              instructor: 'Arta Yazdanseta'
            },
            '94653': {
              daysTimes: [],
              id: 'ARCH-4957',
              sec: '90',
              rem: 0,
              title: 'Latin America Arch /urbanism',
              instructor: 'Gustavo Enrique Alberto Crembil'
            },
            '94654': {
              daysTimes: [],
              id: 'ARCH-4962',
              sec: '90',
              rem: 0,
              title: 'The Art Of Structure',
              instructor: 'Gustavo Enrique Alberto Crembil'
            },
            '94655': {
              daysTimes: [],
              id: 'ARCH-4967',
              sec: '90',
              rem: 0,
              title: 'Artif. Intel. Imagining Arch',
              instructor: 'Gustavo Enrique Alberto Crembil'
            },
            '94656': {
              daysTimes: [],
              id: 'ARCH-4969',
              sec: '90',
              rem: 0,
              title: 'Relationship Btwn Film & Arch',
              instructor: 'Selma Cohen'
            },
            '94657': {
              daysTimes: [],
              id: 'ARCH-4770',
              sec: '90',
              rem: 0,
              title: 'Architectural Design Studio 5',
              instructor: 'Gustavo Enrique Alberto Crembil'
            },
            '94658': {
              daysTimes: [],
              id: 'ARCH-4780',
              sec: '90',
              rem: 11,
              title: 'Architectural Design Studio 6',
              instructor: 'Gustavo Enrique Alberto Crembil'
            },
            '94659': {
              daysTimes: [],
              id: 'ARCH-4790',
              sec: '90',
              rem: 2,
              title: 'Architectural Desgin Studio 7',
              instructor: 'Gustavo Enrique Alberto Crembil'
            },
            '94664': {
              daysTimes: [ [ 'T', { start: 1535, end: 1835 } ] ],
              id: 'ARCH-4170',
              sec: '80',
              rem: 10,
              title: 'Environmental Parametrics',
              instructor: 'Charles A. Portelli'
            },
            '94665': {
              daysTimes: [ [ 'T', { start: 1535, end: 1835 } ] ],
              id: 'ARCH-6380',
              sec: '80',
              rem: 10,
              title: 'Graduate Environmental Parametrics',
              instructor: 'Charles A. Portelli'
            },
            '94666': {
              daysTimes: [ [ 'M', { start: 1000, end: 1300 } ] ],
              id: 'ARCH-6340',
              sec: '80',
              rem: 20,
              title: 'Material Systems & Productions',
              instructor: 'Joshua William Hugo Draper'
            },
            '94667': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-4830',
              sec: '04',
              rem: 15,
              title: 'Integrated Design Development Studio',
              instructor: 'Leandro Piazzi'
            },
            '94668': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-4920',
              sec: '05',
              rem: 20,
              title: 'Final Project Design Studio',
              instructor: 'Christianna Grace Bennett'
            },
            '94676': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1550, end: 1750 } ]
              ],
              id: 'ARCH-2810',
              sec: '06',
              rem: 15,
              title: 'Architectural Design Studio 2',
              instructor: 'Riley Studebaker'
            },
            '94677': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-2810',
              sec: '07',
              rem: 15,
              title: 'Architectural Design Studio 2',
              instructor: 'Claire Eileen Moriarty'
            },
            '94679': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'ARCH-4200',
              sec: '03',
              rem: 20,
              title: 'Portfolio Development',
              instructor: 'TBA'
            },
            '94680': {
              daysTimes: [ [ 'W', { start: 1400, end: 1750 } ] ],
              id: 'ARCH-2550',
              sec: '03',
              rem: 20,
              title: 'Digital Constructs 4',
              instructor: 'Hseng Tai Ja Reng Lintner'
            },
            '94681': {
              daysTimes: [ [ 'W', { start: 1400, end: 1550 } ] ],
              id: 'ARCH-2530',
              sec: '03',
              rem: 20,
              title: 'Digital Constructs 2',
              instructor: 'Kyle Reese Troyer'
            },
            '94700': {
              daysTimes: [ [ 'W', { start: 1600, end: 1750 } ] ],
              id: 'ARCH-2530',
              sec: '04',
              rem: 20,
              title: 'Digital Constructs 2',
              instructor: 'Walaid Sehwail'
            },
            '94844': {
              daysTimes: [ [ 'T', { start: 1010, end: 1200 } ] ],
              id: 'ARCH-6920',
              sec: '80',
              rem: 10,
              title: 'Doctoral Seminar 2',
              instructor: 'Alexandros Tsamis'
            },
            '94845': {
              daysTimes: [ [ 'F', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-6980',
              sec: '02',
              rem: 10,
              title: "Master's Project",
              instructor: 'Dennis Robert Shelden'
            },
            '94846': {
              daysTimes: [ [ 'F', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-6980',
              sec: '03',
              rem: 10,
              title: "Master's Project",
              instructor: 'Joshua William Hugo Draper'
            },
            '94848': {
              daysTimes: [ [ 'F', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-6990',
              sec: '04',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Dennis Robert Shelden'
            },
            '94850': {
              daysTimes: [ [ 'F', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-6990',
              sec: '05',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Joshua William Hugo Draper'
            },
            '94851': {
              daysTimes: [ [ 'M', { start: 1000, end: 1150 } ] ],
              id: 'ARCH-9990',
              sec: '05',
              rem: 10,
              title: 'Architecture Dissertation',
              instructor: 'Arta Yazdanseta'
            },
            '94856': {
              daysTimes: [ [ 'T', { start: 1300, end: 1600 } ] ],
              id: 'ARCH-4966',
              sec: '80',
              rem: 15,
              title: 'Interactive Opera',
              instructor: 'Dennis Robert Shelden'
            },
            '94936': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'ARCH-2360',
              sec: '02',
              rem: 40,
              title: 'Environmental And Ecol System',
              instructor: 'TBA'
            },
            '94937': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'ARCH-2370',
              sec: '03',
              rem: 40,
              title: 'Energy, Comfort & Ecology',
              instructor: 'TBA'
            },
            '94938': {
              daysTimes: [ [ 'W', { start: 1600, end: 1750 } ] ],
              id: 'ARCH-2550',
              sec: '04',
              rem: 20,
              title: 'Digital Constructs 4',
              instructor: 'Ryosuke Imaeda'
            },
            '94940': {
              daysTimes: [ [ 'W', { start: -1, end: -1 } ] ],
              id: 'ARCH-4964',
              sec: '01',
              rem: 60,
              title: 'Comprehensive Design 2 Cmptng',
              instructor: 'Emily Gruendel'
            },
            '94941': {
              daysTimes: [ [ 'F', { start: 1000, end: 1150 } ] ],
              id: 'ARCH-4960',
              sec: '01',
              rem: 10,
              title: 'Intense Ornamnt 3d Printed Mtl',
              instructor: 'Riley Studebaker'
            },
            '94942': {
              daysTimes: [ [ 'M', { start: 1900, end: 2050 } ] ],
              id: 'ARCH-4961',
              sec: '01',
              rem: 10,
              title: 'Hitchcock Arch Of Fear',
              instructor: 'Michael James Oatman'
            },
            '94943': {
              daysTimes: [ [ 'F', { start: 1300, end: 1450 } ] ],
              id: 'ARCH-4963',
              sec: '01',
              rem: 10,
              title: 'Ceramic Upholstery',
              instructor: 'John Rhett Russo'
            },
            '94944': {
              daysTimes: [ [ 'M', { start: 1830, end: 2030 } ] ],
              id: 'ARCH-4966',
              sec: '01',
              rem: 10,
              title: 'Interactive Opera',
              instructor: 'Ted Krueger'
            },
            '94945': {
              daysTimes: [ [ 'T', { start: 1200, end: 1350 } ] ],
              id: 'ARCH-4967',
              sec: '01',
              rem: 10,
              title: 'Artif. Intel. Imagining Arch',
              instructor: 'TBA'
            },
            '94946': {
              daysTimes: [ [ 'R', { start: 1000, end: 1200 } ] ],
              id: 'ARCH-4968',
              sec: '01',
              rem: 10,
              title: 'Skin Deep',
              instructor: 'Marcus Carter'
            },
            '94947': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-6948',
              sec: '02',
              rem: 7,
              title: 'Graduate Final Project',
              instructor: 'Christopher S Perry'
            },
            '94948': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-6948',
              sec: '03',
              rem: 1,
              title: 'Graduate Final Project',
              instructor: 'Hseng Tai Ja Reng Lintner'
            },
            '94949': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-6948',
              sec: '04',
              rem: 1,
              title: 'Graduate Final Project',
              instructor: 'Ryosuke Imaeda'
            },
            '94950': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-6948',
              sec: '05',
              rem: 1,
              title: 'Graduate Final Project',
              instructor: 'Christianna Grace Bennett'
            },
            '94951': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-4830',
              sec: '05',
              rem: 15,
              title: 'Integrated Design Development Studio',
              instructor: 'Emily Gruendel'
            },
            '94952': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-4830',
              sec: '06',
              rem: 15,
              title: 'Integrated Design Development Studio',
              instructor: 'Adam Francis Petela'
            },
            '94953': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-4780',
              sec: '02',
              rem: 12,
              title: 'Architectural Design Studio 6',
              instructor: 'Michael James Oatman, Anthony Titus'
            },
            '94954': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-4780',
              sec: '03',
              rem: 12,
              title: 'Architectural Design Studio 6',
              instructor: 'Marcus Carter'
            },
            '94955': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-4770',
              sec: '02',
              rem: 10,
              title: 'Architectural Design Studio 5',
              instructor: 'Michael James Oatman, Anthony Titus'
            },
            '94956': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ]
              ],
              id: 'ARCH-4770',
              sec: '03',
              rem: 10,
              title: 'Architectural Design Studio 5',
              instructor: 'Marcus Carter'
            },
            '94957': {
              daysTimes: [ [ 'W', { start: 1000, end: 1250 } ] ],
              id: 'ARCH-4150',
              sec: '03',
              rem: 30,
              title: 'Contemporary Design Approaches',
              instructor: 'TBA'
            },
            '94958': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1550, end: 1750 } ]
              ],
              id: 'ARCH-2810',
              sec: '08',
              rem: 15,
              title: 'Architectural Design Studio 2',
              instructor: 'Claire Eileen Moriarty'
            },
            '94959': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-2810',
              sec: '09',
              rem: 15,
              title: 'Architectural Design Studio 2',
              instructor: 'Walaid Sehwail'
            },
            '94960': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'ARCH-2810',
              sec: '10',
              rem: 15,
              title: 'Architectural Design Studio 2',
              instructor: 'Walaid Sehwail'
            },
            '94961': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-2810',
              sec: '11',
              rem: 15,
              title: 'Architectural Design Studio 2',
              instructor: 'Benjamin Vanmuysen'
            },
            '94962': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1550, end: 1750 } ]
              ],
              id: 'ARCH-2810',
              sec: '12',
              rem: 15,
              title: 'Architectural Design Studio 2',
              instructor: 'Benjamin Vanmuysen'
            },
            '94963': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-2810',
              sec: '13',
              rem: 15,
              title: 'Architectural Design Studio 2',
              instructor: 'Caleb White'
            },
            '94964': {
              daysTimes: [
                [ 'W', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'ARCH-2810',
              sec: '14',
              rem: 10,
              title: 'Architectural Design Studio 2',
              instructor: 'Caleb White'
            },
            '94965': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'ARCH-2830',
              sec: '06',
              rem: 15,
              title: 'Architectural Design Studio 4',
              instructor: 'Edwin Jhinang Liu'
            },
            '94966': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1550, end: 1750 } ]
              ],
              id: 'ARCH-2830',
              sec: '08',
              rem: 15,
              title: 'Architectural Design Studio 4',
              instructor: 'Yael Erel'
            },
            '94967': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-2830',
              sec: '09',
              rem: 15,
              title: 'Architectural Design Studio 4',
              instructor: 'Yael Erel'
            },
            '94968': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-2830',
              sec: '10',
              rem: 15,
              title: 'Architectural Design Studio 4',
              instructor: 'Ted Krueger'
            },
            '94969': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1550, end: 1750 } ]
              ],
              id: 'ARCH-2830',
              sec: '11',
              rem: 15,
              title: 'Architectural Design Studio 4',
              instructor: 'Ted Krueger'
            },
            '94970': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1550, end: 1750 } ]
              ],
              id: 'ARCH-2830',
              sec: '12',
              rem: 15,
              title: 'Architectural Design Studio 4',
              instructor: 'TBA'
            },
            '94971': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-2830',
              sec: '13',
              rem: 15,
              title: 'Architectural Design Studio 4',
              instructor: 'TBA'
            },
            '94972': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'ARCH-2830',
              sec: '14',
              rem: 15,
              title: 'Architectural Design Studio 4',
              instructor: 'Per S. Svedberg'
            },
            '94975': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1550, end: 1750 } ]
              ],
              id: 'ARCH-2830',
              sec: '15',
              rem: 15,
              title: 'Architectural Design Studio 4',
              instructor: 'Per S. Svedberg'
            }
          },
          ARTS: {
            '90403': {
              daysTimes: [
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'ARTS-2310',
              sec: '01',
              rem: 40,
              title: 'Rensselaer Concert Choir',
              instructor: 'Robert Michael Whalen'
            },
            '90404': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'ARTS-2300',
              sec: '01',
              rem: 75,
              title: 'Rensselaer Orchestra',
              instructor: 'Robert Michael Whalen'
            },
            '90450': {
              daysTimes: [],
              id: 'ARTS-4940',
              sec: '00',
              rem: 0,
              title: 'Studies In The Arts',
              instructor: ''
            },
            '91640': {
              daysTimes: [],
              id: 'ARTS-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Maryanne Staniszewski'
            },
            '91714': {
              daysTimes: [],
              id: 'ARTS-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Mary Simoni'
            },
            '92050': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'ARTS-2540',
              sec: '01',
              rem: 40,
              title: 'The Multimedia Century',
              instructor: 'Maryanne Staniszewski'
            },
            '92354': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-1200',
              sec: '02',
              rem: 19,
              title: 'Basic Drawing',
              instructor: 'Jennifer Mae Kemp'
            },
            '92461': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ARTS-1200',
              sec: '01',
              rem: 19,
              title: 'Basic Drawing',
              instructor: 'Kenneth A. Ragsdale'
            },
            '92462': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ARTS-4200',
              sec: '01',
              rem: 19,
              title: 'Advanced Drawing',
              instructor: 'Kenneth A. Ragsdale'
            },
            '92463': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-4850',
              sec: '01',
              rem: 19,
              title: 'Creative Seminar II',
              instructor: 'Kenneth A. Ragsdale'
            },
            '92496': {
              daysTimes: [ [ 'W', { start: 1400, end: 1750 } ] ],
              id: 'ARTS-6400',
              sec: '01',
              rem: 26,
              title: 'Experimental Game Design',
              instructor: 'Kathleen Ruiz'
            },
            '92541': {
              daysTimes: [],
              id: 'ARTS-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Michael L. Century'
            },
            '92551': {
              daysTimes: [],
              id: 'ARTS-9990',
              sec: '05',
              rem: 1,
              title: 'Dissertation',
              instructor: 'Benjamin Chia-Ming Chang'
            },
            '92614': {
              daysTimes: [],
              id: 'ARTS-9990',
              sec: '08',
              rem: 7,
              title: 'Dissertation',
              instructor: 'Kathryn High'
            },
            '93168': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-1030',
              sec: '01',
              rem: 19,
              title: 'Digital Filmmaking',
              instructor: 'Elizabeth Press'
            },
            '93408': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ARTS-4460',
              sec: '01',
              rem: 19,
              title: 'Animation Production',
              instructor: 'Silvia Ruzanka'
            },
            '93464': {
              daysTimes: [ [ 'M', { start: 1800, end: 2050 } ] ],
              id: 'ARTS-6110',
              sec: '01',
              rem: 12,
              title: 'Electronic Arts Overview',
              instructor: 'Maryanne Staniszewski'
            },
            '93537': {
              daysTimes: [],
              id: 'ARTS-9990',
              sec: '06',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Robert Kyle Hamilton'
            },
            '93551': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ARTS-1030',
              sec: '02',
              rem: 19,
              title: 'Digital Filmmaking',
              instructor: 'Elizabeth Press'
            },
            '93691': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ARTS-4380',
              sec: '01',
              rem: 19,
              title: 'Music And Sound II',
              instructor: 'Christopher James Fisher-Lochhead'
            },
            '93712': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-2380',
              sec: '01',
              rem: 19,
              title: 'Music And Sound I',
              instructor: 'Christopher James Fisher-Lochhead'
            },
            '93727': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-6965',
              sec: '01',
              rem: 19,
              title: 'Music And Technology II',
              instructor: 'Matthew William Goodheart'
            },
            '93906': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ARTS-2180',
              sec: '01',
              rem: 14,
              title: 'Deep Listening',
              instructor: 'Stephanie D Loveless'
            },
            '93946': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'T', { start: 1600, end: 1750 } ]
              ],
              id: 'ARTS-2700',
              sec: '01',
              rem: 4,
              title: 'Sound Recording & Prod I',
              instructor: 'Ross A. Rice'
            },
            '93947': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'ARTS-2700',
              sec: '02',
              rem: 4,
              title: 'Sound Recording & Prod I',
              instructor: 'Ross A. Rice'
            },
            '93948': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'T', { start: 2000, end: 2150 } ]
              ],
              id: 'ARTS-2700',
              sec: '03',
              rem: 4,
              title: 'Sound Recording & Prod I',
              instructor: 'Ross A. Rice'
            },
            '94024': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-4700',
              sec: '01',
              rem: 12,
              title: 'Sound Recording & Prod II',
              instructor: 'Ross A. Rice'
            },
            '94025': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '07',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Thomas J. Gerbino, Christopher James Fisher-Lochhead'
            },
            '94026': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '02',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Jamecyn F. Morey, Christopher James Fisher-Lochhead'
            },
            '94027': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '03',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'David Bebe, Christopher James Fisher-Lochhead'
            },
            '94028': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '05',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Christopher James Fisher-Lochhead'
            },
            '94029': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '01',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Jamecyn F. Morey, Christopher James Fisher-Lochhead'
            },
            '94030': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '06',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Thomas J. Gerbino, Christopher James Fisher-Lochhead'
            },
            '94031': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '08',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Thomas J. Gerbino, Christopher James Fisher-Lochhead'
            },
            '94032': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '09',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Thomas J. Gerbino, Christopher James Fisher-Lochhead'
            },
            '94033': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '10',
              rem: 6,
              title: 'Private Music Lessons: Violin',
              instructor: 'Akina Yura, Christopher James Fisher-Lochhead'
            },
            '94034': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '12',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Chrysi Nanou, Christopher James Fisher-Lochhead'
            },
            '94035': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '15',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Karlinda D. Caldicott, Christopher James Fisher-Lochhead'
            },
            '94036': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '16',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Mark Foster, Christopher James Fisher-Lochhead'
            },
            '94037': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '17',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Christopher James Fisher-Lochhead, Katherine Anne Skovira'
            },
            '94038': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '19',
              rem: 4,
              title: 'Private Music Lessons: Violin',
              instructor: 'Omar Williams, Christopher James Fisher-Lochhead'
            },
            '94039': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '11',
              rem: 12,
              title: 'Private Music Lessons: Violin',
              instructor: 'Jingwen Tu, Christopher James Fisher-Lochhead'
            },
            '94052': {
              daysTimes: [],
              id: 'ARTS-9990',
              sec: '14',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Benjamin Chia-Ming Chang'
            },
            '94053': {
              daysTimes: [],
              id: 'ARTS-9990',
              sec: '15',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Branda Miller'
            },
            '94054': {
              daysTimes: [],
              id: 'ARTS-9990',
              sec: '16',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Igor Vamos'
            },
            '94137': {
              daysTimes: [ [ 'W', { start: 1300, end: 1550 } ] ],
              id: 'ARTS-2350',
              sec: '01',
              rem: 40,
              title: 'Chamber Music Ensemble',
              instructor: 'Chrysi Nanou'
            },
            '94138': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ARTS-2180',
              sec: '02',
              rem: 5,
              title: 'Deep Listening',
              instructor: 'Stephanie D Loveless'
            },
            '94139': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '14',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Christopher James Fisher-Lochhead, Michael David Blostein'
            },
            '94140': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '13',
              rem: 17,
              title: 'Private Music Lessons: Violin',
              instructor: 'Paul J. Quigley, Christopher James Fisher-Lochhead'
            },
            '94141': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '20',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Christopher James Fisher-Lochhead, Michael David Blostein'
            },
            '94142': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '21',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Christopher James Fisher-Lochhead, Michael David Blostein'
            },
            '94143': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '22',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Matthew P. Steckler, Christopher James Fisher-Lochhead'
            },
            '94144': {
              daysTimes: [],
              id: 'ARTS-2750',
              sec: '23',
              rem: 10,
              title: 'Private Music Lessons: Violin',
              instructor: 'Matthew P. Steckler, Christopher James Fisher-Lochhead'
            },
            '94145': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-4880',
              sec: '01',
              rem: 19,
              title: 'Music & Ai',
              instructor: 'Robert Kyle Hamilton'
            },
            '94146': {
              daysTimes: [],
              id: 'ARTS-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Matthew William Goodheart'
            },
            '94147': {
              daysTimes: [],
              id: 'ARTS-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Robert F. Nideffer'
            },
            '94444': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ARTS-1200',
              sec: '03',
              rem: 19,
              title: 'Basic Drawing',
              instructor: 'Jennifer Mae Kemp'
            },
            '94446': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'ARTS-2060',
              sec: '01',
              rem: 19,
              title: '2d Experimental Animation',
              instructor: 'Nathan Scott Meltz'
            },
            '94447': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ARTS-2090',
              sec: '01',
              rem: 15,
              title: 'Radical Graphics Screenprnt',
              instructor: 'Nathan Scott Meltz'
            },
            '94448': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-2180',
              sec: '03',
              rem: 14,
              title: 'Deep Listening',
              instructor: 'Stephanie D Loveless'
            },
            '94449': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-2180',
              sec: '04',
              rem: 5,
              title: 'Deep Listening',
              instructor: 'Stephanie D Loveless'
            },
            '94454': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'ARTS-4040',
              sec: '01',
              rem: 19,
              title: 'Rethinking Documentary:video Production',
              instructor: 'Branda Miller'
            },
            '94455': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ARTS-4080',
              sec: '01',
              rem: 19,
              title: 'Art, Community And Technology',
              instructor: 'Branda Miller'
            },
            '94539': {
              daysTimes: [],
              id: 'ARTS-9990',
              sec: '12',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Silvia Ruzanka'
            },
            '94580': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ARTS-1380',
              sec: '01',
              rem: 19,
              title: 'Fundamentals Of Music & Sound',
              instructor: 'Christopher James Fisher-Lochhead'
            },
            '94583': {
              daysTimes: [
                [ 'W', { start: 1600, end: 1750 } ],
                [ 'F', { start: 1600, end: 1750 } ]
              ],
              id: 'ARTS-2962',
              sec: '01',
              rem: 40,
              title: 'Rensselaer Wind Symphony',
              instructor: 'Robert Michael Whalen'
            },
            '94604': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-4160',
              sec: '01',
              rem: 19,
              title: 'Music And Technology II',
              instructor: 'Matthew William Goodheart'
            },
            '94605': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'ARTS-2230',
              sec: '01',
              rem: 19,
              title: '3d Digital Modeling',
              instructor: 'Cassandra Sammartano'
            },
            '94606': {
              daysTimes: [
                [ 'T', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'ARTS-4860',
              sec: '01',
              rem: 19,
              title: 'Advanced Digital Imaging',
              instructor: 'Kathleen Ruiz'
            },
            '94607': {
              daysTimes: [
                [ 'T', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'ARTS-6860',
              sec: '01',
              rem: 19,
              title: 'Advanced Digital Imaging',
              instructor: 'Kathleen Ruiz'
            },
            '94671': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ARTS-2500',
              sec: '01',
              rem: 19,
              title: 'History Of Western Music',
              instructor: 'Michael L. Century'
            },
            '94817': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ARTS-2220',
              sec: '01',
              rem: 19,
              title: 'Fundamentals Of 2d Design',
              instructor: 'Nathan Scott Meltz'
            },
            '94818': {
              daysTimes: [ [ 'T', { start: 1600, end: 1850 } ] ],
              id: 'ARTS-2350',
              sec: '02',
              rem: 16,
              title: 'Chamber Music Ensemble',
              instructor: 'Chrysi Nanou'
            },
            '94819': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ARTS-4060',
              sec: '01',
              rem: 19,
              title: '3d Visual Effects',
              instructor: 'Philip Kimmel Vanderhyden'
            },
            '94820': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'ARTS-6040',
              sec: '01',
              rem: 19,
              title: 'Rethinking Documentary: Video',
              instructor: 'Branda Miller'
            },
            '94821': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-4130',
              sec: '01',
              rem: 19,
              title: 'New Media Theory',
              instructor: 'Michael L. Century'
            },
            '94822': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-6130',
              sec: '01',
              rem: 19,
              title: 'New Media Theory',
              instructor: 'Michael L. Century'
            },
            '94823': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-4140',
              sec: '01',
              rem: 19,
              title: 'Queer Ecologies',
              instructor: 'Kathryn High'
            },
            '94824': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-6140',
              sec: '01',
              rem: 19,
              title: 'Queer Ecologies',
              instructor: 'Kathryn High'
            },
            '94825': {
              daysTimes: [
                [ 'T', { start: 1600, end: 1750 } ],
                [ 'F', { start: 1600, end: 1750 } ]
              ],
              id: 'ARTS-4220',
              sec: '01',
              rem: 19,
              title: 'Painting',
              instructor: 'Jennifer Mae Kemp'
            },
            '94826': {
              daysTimes: [
                [ 'T', { start: 1600, end: 1750 } ],
                [ 'F', { start: 1600, end: 1750 } ]
              ],
              id: 'ARTS-6220',
              sec: '01',
              rem: 19,
              title: 'Painting',
              instructor: 'Jennifer Mae Kemp'
            },
            '94827': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-4260',
              sec: '01',
              rem: 19,
              title: 'Life Drawing And Anatomy For Artists',
              instructor: 'Jennifer Mae Kemp'
            },
            '94828': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ARTS-6260',
              sec: '01',
              rem: 19,
              title: 'Life Drawing And Anatomy For Artists',
              instructor: 'Jennifer Mae Kemp'
            },
            '94829': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'ARTS-4640',
              sec: '01',
              rem: 19,
              title: 'Science Fictions',
              instructor: 'Kathryn High'
            },
            '94830': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'ARTS-6640',
              sec: '01',
              rem: 19,
              title: 'Science Fictions',
              instructor: 'Kathryn High'
            },
            '94831': {
              daysTimes: [ [ 'W', { start: 1200, end: 1550 } ] ],
              id: 'ARTS-4050',
              sec: '01',
              rem: 15,
              title: 'Adv Video Media Studio',
              instructor: 'Elizabeth Press'
            },
            '94892': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'ARTS-4960',
              sec: '01',
              rem: 19,
              title: 'Spatial Music & Sound',
              instructor: 'Matthew William Goodheart'
            },
            '94893': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ARTS-4961',
              sec: '01',
              rem: 19,
              title: 'Net.art',
              instructor: 'Robert F. Nideffer'
            },
            '94894': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'ARTS-6960',
              sec: '01',
              rem: 19,
              title: 'Spatial Music & Sound',
              instructor: 'Matthew William Goodheart'
            }
          },
          ASTR: {
            '91227': {
              daysTimes: [],
              id: 'ASTR-2940',
              sec: '00',
              rem: 0,
              title: 'Readings In Astr',
              instructor: ''
            },
            '91228': {
              daysTimes: [],
              id: 'ASTR-4940',
              sec: '00',
              rem: 0,
              title: 'Special Projects In Astronomy',
              instructor: ''
            },
            '91229': {
              daysTimes: [],
              id: 'ASTR-6940',
              sec: '00',
              rem: 0,
              title: 'Readings In Astr',
              instructor: ''
            },
            '92355': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ASTR-4120',
              sec: '01',
              rem: 18,
              title: 'Observational Astronomy',
              instructor: 'Heidi Jo Newberg'
            },
            '92660': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ASTR-4240',
              sec: '01',
              rem: 15,
              title: 'Gravitation & Cosmology',
              instructor: 'Joel T. Giedt'
            },
            '93216': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'ASTR-4960',
              sec: '01',
              rem: 15,
              title: 'Astrophysics Of Galaxies',
              instructor: 'Heidi Jo Newberg'
            },
            '93375': {
              daysTimes: [],
              id: 'ASTR-6970',
              sec: '01',
              rem: 10,
              title: 'Masters Professional Project',
              instructor: 'Ethan Craig Brown'
            },
            '94338': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ASTR-1520',
              sec: '01',
              rem: 85,
              title: 'Stars, Galaxies And The Cosmos',
              instructor: 'Charles Harold Martin'
            },
            '94520': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ASTR-4961',
              sec: '01',
              rem: 20,
              title: 'Particle Astrophysics',
              instructor: 'Ethan Craig Brown'
            },
            '94712': {
              daysTimes: [],
              id: 'ASTR-6970',
              sec: '02',
              rem: 10,
              title: 'Masters Professional Project',
              instructor: 'Heidi Jo Newberg'
            }
          },
          BCBP: {
            '90019': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'BCBP-4770',
              sec: '01',
              rem: 40,
              title: 'Molecular Biochem II',
              instructor: 'Keith Fraser'
            },
            '90189': {
              daysTimes: [],
              id: 'BCBP-2940',
              sec: '00',
              rem: 0,
              title: 'Readings In Biochem/biophysics',
              instructor: ''
            },
            '90204': {
              daysTimes: [],
              id: 'BCBP-6990',
              sec: '03',
              rem: 80,
              title: "Master's Thesis",
              instructor: 'TBA'
            },
            '90205': {
              daysTimes: [],
              id: 'BCBP-6990',
              sec: '04',
              rem: 80,
              title: "Master's Thesis",
              instructor: 'TBA'
            },
            '90271': {
              daysTimes: [],
              id: 'BCBP-6940',
              sec: '00',
              rem: 0,
              title: 'Readings In Bcbp',
              instructor: ''
            },
            '90287': {
              daysTimes: [],
              id: 'BCBP-2900',
              sec: '00',
              rem: 0,
              title: 'Research In Biochem/biophysics',
              instructor: 'TBA'
            },
            '91144': {
              daysTimes: [],
              id: 'BCBP-4990',
              sec: '02',
              rem: 1,
              title: 'Senior Research Thesis',
              instructor: 'Susan P. Gilbert'
            },
            '91193': {
              daysTimes: [],
              id: 'BCBP-4990',
              sec: '03',
              rem: 1,
              title: 'Senior Research Thesis',
              instructor: 'Robert J. Linhardt'
            },
            '91259': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'BCBP-6310',
              sec: '01',
              rem: 15,
              title: 'Genetic Engineering',
              instructor: 'Keith Fraser'
            },
            '91260': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'BCBP-4310',
              sec: '01',
              rem: 35,
              title: 'Genetic Engineering',
              instructor: 'Keith Fraser'
            },
            '91848': {
              daysTimes: [],
              id: 'BCBP-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'George I. Makhatadze'
            },
            '91849': {
              daysTimes: [],
              id: 'BCBP-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Chunyu Wang'
            },
            '91850': {
              daysTimes: [],
              id: 'BCBP-9990',
              sec: '08',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Christopher Bystroff'
            },
            '91851': {
              daysTimes: [],
              id: 'BCBP-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Douglas Martin Swank'
            },
            '91881': {
              daysTimes: [],
              id: 'BCBP-4990',
              sec: '01',
              rem: 1,
              title: 'Senior Research Thesis',
              instructor: 'Eric Matthew Rutledge'
            },
            '91901': {
              daysTimes: [],
              id: 'BCBP-4990',
              sec: '04',
              rem: 1,
              title: 'Senior Research Thesis',
              instructor: 'Blanca L. Barquera'
            },
            '91963': {
              daysTimes: [],
              id: 'BCBP-4990',
              sec: '05',
              rem: 1,
              title: 'Senior Research Thesis',
              instructor: 'Chunyu Wang'
            },
            '92472': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'BCBP-6420',
              sec: '01',
              rem: 30,
              title: 'Molecular Modeling',
              instructor: 'Christopher Bystroff, Chunyu Wang'
            },
            '92473': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'BCBP-4550',
              sec: '01',
              rem: 30,
              title: 'Molecular Modeling',
              instructor: 'Christopher Bystroff, Chunyu Wang'
            },
            '92676': {
              daysTimes: [],
              id: 'BCBP-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Blanca L. Barquera'
            },
            '92967': {
              daysTimes: [],
              id: 'BCBP-9990',
              sec: '09',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Susan P. Gilbert'
            },
            '93138': {
              daysTimes: [],
              id: 'BCBP-9990',
              sec: '10',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Steven Cramer'
            },
            '93244': {
              daysTimes: [],
              id: 'BCBP-9990',
              sec: '06',
              rem: 25,
              title: 'Dissertation',
              instructor: 'Scott Thomas Forth'
            },
            '93424': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'BCBP-4660',
              sec: '01',
              rem: 15,
              title: 'The Biology Of Systems',
              instructor: 'Jennifer Marie Hurley'
            },
            '93425': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'BCBP-6650',
              sec: '01',
              rem: 15,
              title: 'The Biology Of Systems',
              instructor: 'Jennifer Marie Hurley'
            },
            '93533': {
              daysTimes: [],
              id: 'BCBP-9990',
              sec: '11',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jennifer Marie Hurley'
            },
            '93704': {
              daysTimes: [
                [ 'T', { start: 1230, end: 1720 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'BCBP-4710',
              sec: '01',
              rem: 8,
              title: 'Biochemistry Lab',
              instructor: 'Eric Matthew Rutledge'
            },
            '94087': {
              daysTimes: [ [ 'W', { start: 900, end: 1050 } ] ],
              id: 'BCBP-4962',
              sec: '01',
              rem: 0,
              title: 'Biology Of The Gut Microbiota',
              instructor: 'Blanca L. Barquera'
            },
            '94088': {
              daysTimes: [ [ 'W', { start: 900, end: 1050 } ] ],
              id: 'BCBP-6962',
              sec: '01',
              rem: 0,
              title: 'Biology Of The Gut Microbiota',
              instructor: 'Blanca L. Barquera'
            },
            '94235': {
              daysTimes: [
                [ 'W', { start: 1230, end: 1720 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'BCBP-4710',
              sec: '02',
              rem: 8,
              title: 'Biochemistry Lab',
              instructor: 'Eric Matthew Rutledge'
            },
            '94358': {
              daysTimes: [],
              id: 'BCBP-9990',
              sec: '12',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Mattheos Koffas'
            },
            '94398': {
              daysTimes: [],
              id: 'BCBP-6970',
              sec: '02',
              rem: 10,
              title: 'Professional Project',
              instructor: 'Wilfredo Colon'
            }
          },
          BIOL: {
            '90020': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'BIOL-4620',
              sec: '01',
              rem: 90,
              title: 'Molecular Biology',
              instructor: 'Eric Matthew Rutledge'
            },
            '90021': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'BIOL-4770',
              sec: '01',
              rem: 60,
              title: 'Molecular Biochem II',
              instructor: 'Keith Fraser'
            },
            '90087': {
              daysTimes: [ [ 'M', { start: 1200, end: 1250 } ] ],
              id: 'BIOL-6900',
              sec: '01',
              rem: 60,
              title: 'Seminar In Biology',
              instructor: 'Marvin D Bentley'
            },
            '90191': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Sandra Nierzwicki-Bauer'
            },
            '90329': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '06',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Christopher Bystroff'
            },
            '90371': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'BIOL-4550',
              sec: '01',
              rem: 30,
              title: 'Molecular Modeling',
              instructor: 'Christopher Bystroff, Chunyu Wang'
            },
            '90526': {
              daysTimes: [],
              id: 'BIOL-4940',
              sec: '00',
              rem: 0,
              title: 'Readings In Biology',
              instructor: ''
            },
            '90527': {
              daysTimes: [],
              id: 'BIOL-6940',
              sec: '00',
              rem: 0,
              title: 'Readings In Biol',
              instructor: ''
            },
            '90555': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '14',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Blanca L. Barquera'
            },
            '90556': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '20',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Mattheos Koffas'
            },
            '90557': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '19',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Chunyu Wang'
            },
            '91230': {
              daysTimes: [],
              id: 'BIOL-2900',
              sec: '00',
              rem: 0,
              title: 'Research In Biology',
              instructor: ''
            },
            '91272': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '24',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Lee Ligon'
            },
            '91273': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '25',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Douglas Martin Swank'
            },
            '91274': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'BIOL-4850',
              sec: '01',
              rem: 30,
              title: 'Principles Of Ecology',
              instructor: 'Ricky A Relyea'
            },
            '91442': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'W', { start: 1600, end: 1720 } ],
                [ 'F', { start: 1600, end: 1720 } ]
              ],
              id: 'BIOL-6520',
              sec: '01',
              rem: 20,
              title: 'Biology Core Course II',
              instructor: 'Lee Ligon'
            },
            '91444': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'BIOL-4250',
              sec: '01',
              rem: 50,
              title: 'Developmental Biology',
              instructor: 'Douglas Martin Swank'
            },
            '91846': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'George I. Makhatadze'
            },
            '91847': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Susan P. Gilbert'
            },
            '91961': {
              daysTimes: [],
              id: 'BIOL-4990',
              sec: '05',
              rem: 0,
              title: 'Senior Research Thesis',
              instructor: 'Chunyu Wang'
            },
            '92000': {
              daysTimes: [],
              id: 'BIOL-4990',
              sec: '10',
              rem: 0,
              title: 'Senior Research Thesis',
              instructor: 'Christopher Bystroff'
            },
            '92004': {
              daysTimes: [],
              id: 'BIOL-6990',
              sec: '01',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Susan P. Gilbert'
            },
            '92057': {
              daysTimes: [],
              id: 'BIOL-6970',
              sec: '01',
              rem: 10,
              title: 'Masters Professional Project',
              instructor: 'Ricky A Relyea'
            },
            '92071': {
              daysTimes: [],
              id: 'BIOL-6990',
              sec: '02',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Christopher Bystroff, Sandra Nierzwicki-Bauer'
            },
            '92157': {
              daysTimes: [],
              id: 'BIOL-6980',
              sec: '01',
              rem: 1,
              title: 'Research',
              instructor: 'Eric Matthew Rutledge'
            },
            '92158': {
              daysTimes: [],
              id: 'BIOL-6970',
              sec: '02',
              rem: 10,
              title: 'Masters Professional Project',
              instructor: 'Eric Matthew Rutledge'
            },
            '92210': {
              daysTimes: [],
              id: 'BIOL-6990',
              sec: '03',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Eric Matthew Rutledge'
            },
            '92212': {
              daysTimes: [],
              id: 'BIOL-6970',
              sec: '03',
              rem: 10,
              title: 'Masters Professional Project',
              instructor: 'George I. Makhatadze'
            },
            '92241': {
              daysTimes: [],
              id: 'BIOL-6970',
              sec: '04',
              rem: 10,
              title: 'Masters Professional Project',
              instructor: 'Christopher Bystroff'
            },
            '92268': {
              daysTimes: [],
              id: 'BIOL-6970',
              sec: '05',
              rem: 10,
              title: 'Masters Professional Project',
              instructor: 'Douglas Martin Swank'
            },
            '92382': {
              daysTimes: [],
              id: 'BIOL-6990',
              sec: '04',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Sandra Nierzwicki-Bauer'
            },
            '92416': {
              daysTimes: [],
              id: 'BIOL-6970',
              sec: '06',
              rem: 10,
              title: 'Masters Professional Project',
              instructor: 'Qun Wan'
            },
            '92464': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'BIOL-1010',
              sec: '01',
              rem: 125,
              title: 'Introduction To Biology',
              instructor: 'Jeremy Lynch Farrell, Georgi G. Shablovsky'
            },
            '92465': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'BIOL-1010',
              sec: '02',
              rem: 125,
              title: 'Introduction To Biology',
              instructor: 'Jeremy Lynch Farrell, Georgi G. Shablovsky'
            },
            '92466': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'BIOL-1010',
              sec: '03',
              rem: 125,
              title: 'Introduction To Biology',
              instructor: 'Georgi G. Shablovsky, Susan P. Gilbert'
            },
            '92468': {
              daysTimes: [ [ 'M', { start: 900, end: 1150 } ] ],
              id: 'BIOL-1015',
              sec: '01',
              rem: 64,
              title: 'Introduction To Biology Laboratory',
              instructor: 'Georgi G. Shablovsky, Seemanti Ramanath'
            },
            '92469': {
              daysTimes: [ [ 'M', { start: 1300, end: 1750 } ] ],
              id: 'BIOL-1015',
              sec: '02',
              rem: 64,
              title: 'Introduction To Biology Laboratory',
              instructor: 'Georgi G. Shablovsky, Seemanti Ramanath'
            },
            '92470': {
              daysTimes: [ [ 'T', { start: 1200, end: 1450 } ] ],
              id: 'BIOL-1015',
              sec: '03',
              rem: 64,
              title: 'Introduction To Biology Laboratory',
              instructor: 'Georgi G. Shablovsky, Seemanti Ramanath'
            },
            '92471': {
              daysTimes: [ [ 'W', { start: 1000, end: 1250 } ] ],
              id: 'BIOL-1015',
              sec: '04',
              rem: 64,
              title: 'Introduction To Biology Laboratory',
              instructor: 'Georgi G. Shablovsky, Seemanti Ramanath'
            },
            '92474': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'BIOL-6420',
              sec: '01',
              rem: 30,
              title: 'Molecular Modeling',
              instructor: 'Christopher Bystroff, Chunyu Wang'
            },
            '92498': {
              daysTimes: [],
              id: 'BIOL-6930',
              sec: '01',
              rem: 12,
              title: 'Research Rotation III',
              instructor: 'George I. Makhatadze'
            },
            '92674': {
              daysTimes: [],
              id: 'BIOL-4990',
              sec: '08',
              rem: 0,
              title: 'Senior Research Thesis',
              instructor: 'Susan P. Gilbert'
            },
            '92680': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '11',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jonathan Dordick'
            },
            '92685': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ricky A Relyea'
            },
            '92966': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'BIOL-4200',
              sec: '01',
              rem: 35,
              title: 'Biostatistics',
              instructor: 'Jeremy Lynch Farrell'
            },
            '93146': {
              daysTimes: [ [ 'W', { start: 1300, end: 1550 } ] ],
              id: 'BIOL-1015',
              sec: '05',
              rem: 64,
              title: 'Introduction To Biology Laboratory',
              instructor: 'Georgi G. Shablovsky, Seemanti Ramanath'
            },
            '93147': {
              daysTimes: [ [ 'F', { start: 1200, end: 1450 } ] ],
              id: 'BIOL-1015',
              sec: '06',
              rem: 64,
              title: 'Introduction To Biology Laboratory',
              instructor: 'Georgi G. Shablovsky, Seemanti Ramanath'
            },
            '93212': {
              daysTimes: [],
              id: 'BIOL-4120',
              sec: '01',
              rem: 20,
              title: 'Investigative Medicine II',
              instructor: 'Douglas Martin Swank'
            },
            '93252': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '13',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jennifer Marie Hurley'
            },
            '93422': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'BIOL-4660',
              sec: '01',
              rem: 15,
              title: 'The Biology Of Systems',
              instructor: 'Jennifer Marie Hurley'
            },
            '93423': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'BIOL-6650',
              sec: '01',
              rem: 15,
              title: 'The Biology Of Systems',
              instructor: 'Jennifer Marie Hurley'
            },
            '93426': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '15',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Marvin D Bentley'
            },
            '93509': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '17',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Scott Thomas Forth'
            },
            '93561': {
              daysTimes: [],
              id: 'BIOL-6970',
              sec: '07',
              rem: 1,
              title: 'Masters Professional Project',
              instructor: 'Mattheos Koffas'
            },
            '93701': {
              daysTimes: [
                [ 'T', { start: 1230, end: 1720 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'BIOL-4710',
              sec: '01',
              rem: 8,
              title: 'Biochemistry Lab',
              instructor: 'Eric Matthew Rutledge'
            },
            '93728': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'BIOL-4150',
              sec: '01',
              rem: 18,
              title: 'Cellular Neuroscience',
              instructor: 'Marvin D Bentley'
            },
            '93729': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'BIOL-6150',
              sec: '01',
              rem: 4,
              title: 'Cellular Neuroscience',
              instructor: 'Marvin D Bentley'
            },
            '93738': {
              daysTimes: [ [ 'M', { start: 1000, end: 1150 } ] ],
              id: 'BIOL-6960',
              sec: '01',
              rem: 12,
              title: 'Curr Topics-cytoskeletal Rsch',
              instructor: 'Scott Thomas Forth'
            },
            '93745': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '16',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Richard Alan Gross'
            },
            '94201': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'BIOL-2120',
              sec: '01',
              rem: 90,
              title: 'Intro To Cell & Molec Biology',
              instructor: 'Michael T Klein'
            },
            '94202': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'BIOL-2120',
              sec: '02',
              rem: 90,
              title: 'Intro To Cell & Molec Biology',
              instructor: 'Michael T Klein'
            },
            '94203': {
              daysTimes: [ [ 'M', { start: 1400, end: 1650 } ] ],
              id: 'BIOL-2125',
              sec: '01',
              rem: 20,
              title: 'Intro Cell & Molec Biol Lab',
              instructor: 'Richard Peter Bonocora'
            },
            '94204': {
              daysTimes: [ [ 'T', { start: 900, end: 1150 } ] ],
              id: 'BIOL-2125',
              sec: '03',
              rem: 20,
              title: 'Intro Cell & Molec Biol Lab',
              instructor: 'Richard Peter Bonocora'
            },
            '94205': {
              daysTimes: [ [ 'T', { start: 900, end: 1150 } ] ],
              id: 'BIOL-2125',
              sec: '04',
              rem: 16,
              title: 'Intro Cell & Molec Biol Lab',
              instructor: 'Richard Peter Bonocora, Keylon Levere Cheeseman'
            },
            '94206': {
              daysTimes: [ [ 'T', { start: 1300, end: 1550 } ] ],
              id: 'BIOL-2125',
              sec: '05',
              rem: 20,
              title: 'Intro Cell & Molec Biol Lab',
              instructor: 'Richard Peter Bonocora, Michael T Klein'
            },
            '94207': {
              daysTimes: [ [ 'T', { start: 1300, end: 1550 } ] ],
              id: 'BIOL-2125',
              sec: '06',
              rem: 16,
              title: 'Intro Cell & Molec Biol Lab',
              instructor: 'Richard Peter Bonocora, Keylon Levere Cheeseman'
            },
            '94208': {
              daysTimes: [ [ 'W', { start: 900, end: 1150 } ] ],
              id: 'BIOL-2125',
              sec: '07',
              rem: 20,
              title: 'Intro Cell & Molec Biol Lab',
              instructor: 'Richard Peter Bonocora'
            },
            '94209': {
              daysTimes: [ [ 'W', { start: 900, end: 1150 } ] ],
              id: 'BIOL-2125',
              sec: '08',
              rem: 16,
              title: 'Intro Cell & Molec Biol Lab',
              instructor: 'Richard Peter Bonocora, Keith Fraser'
            },
            '94210': {
              daysTimes: [ [ 'W', { start: 1300, end: 1550 } ] ],
              id: 'BIOL-2125',
              sec: '09',
              rem: 20,
              title: 'Intro Cell & Molec Biol Lab',
              instructor: 'Richard Peter Bonocora'
            },
            '94211': {
              daysTimes: [ [ 'W', { start: 1300, end: 1550 } ] ],
              id: 'BIOL-2125',
              sec: '10',
              rem: 16,
              title: 'Intro Cell & Molec Biol Lab',
              instructor: 'Richard Peter Bonocora'
            },
            '94234': {
              daysTimes: [
                [ 'W', { start: 1230, end: 1720 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'BIOL-4710',
              sec: '02',
              rem: 8,
              title: 'Biochemistry Lab',
              instructor: 'Eric Matthew Rutledge'
            },
            '94453': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'BIOL-4200',
              sec: '02',
              rem: 35,
              title: 'Biostatistics',
              instructor: 'Jonathan T Stetler'
            },
            '94473': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'BIOL-6550',
              sec: '01',
              rem: 25,
              title: 'Ethical Issues In Biotechnology',
              instructor: 'Deepak Vashishth'
            },
            '94538': {
              daysTimes: [ [ 'M', { start: 1400, end: 1650 } ] ],
              id: 'BIOL-2125',
              sec: '02',
              rem: 16,
              title: 'Intro Cell & Molec Biol Lab',
              instructor: 'Richard Peter Bonocora'
            },
            '94603': {
              daysTimes: [],
              id: 'BIOL-4130',
              sec: '01',
              rem: 16,
              title: 'Biomedical Research',
              instructor: 'Douglas Martin Swank'
            },
            '94682': {
              daysTimes: [],
              id: 'BIOL-9990',
              sec: '08',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Qun Wan'
            },
            '94719': {
              daysTimes: [ [ 'W', { start: 1000, end: 1250 } ] ],
              id: 'BIOL-1016',
              sec: '01',
              rem: 64,
              title: 'Intro Biol Computational Lab',
              instructor: 'Jonathan T Stetler, Georgi G. Shablovsky'
            },
            '94720': {
              daysTimes: [ [ 'W', { start: 1300, end: 1550 } ] ],
              id: 'BIOL-1016',
              sec: '02',
              rem: 64,
              title: 'Intro Biol Computational Lab',
              instructor: 'Jonathan T Stetler, Georgi G. Shablovsky'
            },
            '94976': {
              daysTimes: [],
              id: 'BIOL-6970',
              sec: '08',
              rem: 10,
              title: 'Masters Professional Project',
              instructor: 'Lee Ligon'
            }
          },
          BMED: {
            '90043': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1600, end: 1850 } ]
              ],
              id: 'BMED-4500',
              sec: '01',
              rem: 39,
              title: 'Adv Systems Physiology',
              instructor: 'Juergen Hahn, Peter Vincent'
            },
            '90044': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1050 } ]
              ],
              id: 'BMED-4600',
              sec: '01',
              rem: 39,
              title: 'Biomedical Engr Design',
              instructor: 'George Jiren Lee'
            },
            '90133': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '01',
              rem: 5,
              title: 'Dissertation',
              instructor: 'Suvranu De'
            },
            '90384': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '06',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Deepak Vashishth'
            },
            '90451': {
              daysTimes: [],
              id: 'BMED-2940',
              sec: '00',
              rem: 0,
              title: 'Readings In Bmed',
              instructor: ''
            },
            '90452': {
              daysTimes: [],
              id: 'BMED-4940',
              sec: '00',
              rem: 0,
              title: 'Readings In Bmed',
              instructor: ''
            },
            '90453': {
              daysTimes: [],
              id: 'BMED-6940',
              sec: '00',
              rem: 0,
              title: 'Readings In Bmed',
              instructor: ''
            },
            '90487': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '08',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Eric Howard Ledet'
            },
            '90537': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Deanna Marie Thompson'
            },
            '91063': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'BMED-2100',
              sec: '01',
              rem: 0,
              title: 'Biomaterials Sci & Engineering',
              instructor: 'Ryan James Gilbert'
            },
            '91087': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '21',
              rem: 10,
              title: 'Dissertation',
              instructor: 'David Thomas Corr'
            },
            '91269': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'BMED-4650',
              sec: '01',
              rem: 20,
              title: 'Intro To Cell And Tissue Eng',
              instructor: 'Elizabeth Blaber'
            },
            '91293': {
              daysTimes: [],
              id: 'BMED-6980',
              sec: '01',
              rem: 25,
              title: "Master's Project",
              instructor: 'Xavier R. M. Intes'
            },
            '91294': {
              daysTimes: [],
              id: 'BMED-6980',
              sec: '02',
              rem: 25,
              title: "Master's Project",
              instructor: 'David Thomas Corr'
            },
            '91295': {
              daysTimes: [],
              id: 'BMED-6990',
              sec: '04',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Eric Howard Ledet'
            },
            '91296': {
              daysTimes: [],
              id: 'BMED-6990',
              sec: '08',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Pingkun Yan'
            },
            '91297': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Xavier R. M. Intes'
            },
            '91463': {
              daysTimes: [],
              id: 'BMED-6990',
              sec: '02',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'David Thomas Corr'
            },
            '91464': {
              daysTimes: [],
              id: 'BMED-6990',
              sec: '05',
              rem: 25,
              title: "Master's Thesis",
              instructor: 'Xavier R. M. Intes'
            },
            '91465': {
              daysTimes: [],
              id: 'BMED-6990',
              sec: '07',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Deanna Marie Thompson'
            },
            '91466': {
              daysTimes: [],
              id: 'BMED-6990',
              sec: '09',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Deepak Vashishth'
            },
            '91467': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Stanley M. Dunn'
            },
            '91514': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '10',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Elizabeth Blaber'
            },
            '92031': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '09',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ryan James Gilbert'
            },
            '92032': {
              daysTimes: [],
              id: 'BMED-6990',
              sec: '10',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Ryan James Gilbert'
            },
            '92034': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '13',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Douglas Martin Swank'
            },
            '92223': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'BMED-2100',
              sec: '02',
              rem: 50,
              title: 'Biomaterials Sci & Engineering',
              instructor: 'Mariah Somer Hahn'
            },
            '92224': {
              daysTimes: [
                [ 'W', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1300, end: 1550 } ]
              ],
              id: 'BMED-4010',
              sec: '01',
              rem: 12,
              title: 'Biomedical Engineering Lab',
              instructor: 'Monica Agarwal'
            },
            '92225': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1050 } ]
              ],
              id: 'BMED-4600',
              sec: '02',
              rem: 39,
              title: 'Biomedical Engr Design',
              instructor: 'Hisham S. Mohamed'
            },
            '92258': {
              daysTimes: [],
              id: 'BMED-6990',
              sec: '03',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Robert J. Linhardt'
            },
            '92281': {
              daysTimes: [],
              id: 'BMED-6980',
              sec: '03',
              rem: 10,
              title: "Master's Project",
              instructor: 'Eric Howard Ledet'
            },
            '92321': {
              daysTimes: [],
              id: 'BMED-6980',
              sec: '04',
              rem: 10,
              title: "Master's Project",
              instructor: 'Deanna Marie Thompson'
            },
            '92357': {
              daysTimes: [
                [ 'W', { start: 1000, end: 1150 } ],
                [ 'R', { start: 900, end: 1150 } ]
              ],
              id: 'BMED-4010',
              sec: '02',
              rem: 12,
              title: 'Biomedical Engineering Lab',
              instructor: 'Monica Agarwal'
            },
            '92358': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'BMED-2540',
              sec: '01',
              rem: 35,
              title: 'Biomechanics',
              instructor: 'Qun Wan'
            },
            '92368': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '14',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Mariah Somer Hahn'
            },
            '92369': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '15',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Juergen Hahn'
            },
            '92377': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Qun Wan'
            },
            '92395': {
              daysTimes: [],
              id: 'BMED-6980',
              sec: '06',
              rem: 10,
              title: "Master's Project",
              instructor: 'Qun Wan'
            },
            '92475': {
              daysTimes: [],
              id: 'BMED-6980',
              sec: '07',
              rem: 10,
              title: "Master's Project",
              instructor: 'Pingkun Yan'
            },
            '92490': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'BMED-2300',
              sec: '01',
              rem: 35,
              title: 'Bioimaging/ Bioinstrumentation',
              instructor: 'Hisham S. Mohamed'
            },
            '92491': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'BMED-6650',
              sec: '01',
              rem: 15,
              title: 'Intro To Cell And Tissue Engr',
              instructor: 'Elizabeth Blaber'
            },
            '92499': {
              daysTimes: [],
              id: 'BMED-6980',
              sec: '08',
              rem: 10,
              title: "Master's Project",
              instructor: 'Ryan James Gilbert'
            },
            '92514': {
              daysTimes: [],
              id: 'BMED-6980',
              sec: '10',
              rem: 10,
              title: "Master's Project",
              instructor: 'Mariah Somer Hahn'
            },
            '92515': {
              daysTimes: [],
              id: 'BMED-6980',
              sec: '11',
              rem: 10,
              title: "Master's Project",
              instructor: 'Juergen Hahn'
            },
            '92516': {
              daysTimes: [],
              id: 'BMED-6980',
              sec: '12',
              rem: 10,
              title: "Master's Project",
              instructor: 'Ge Wang'
            },
            '92519': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '11',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Edmund Francis Palermo'
            },
            '92550': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '16',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ge Wang'
            },
            '92557': {
              daysTimes: [],
              id: 'BMED-6990',
              sec: '06',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Mariah Somer Hahn'
            },
            '92632': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ]
              ],
              id: 'BMED-4460',
              sec: '01',
              rem: 15,
              title: 'Biological Image Analysis',
              instructor: 'Pingkun Yan'
            },
            '92633': {
              daysTimes: [ [ 'R', { start: 1400, end: 1550 } ] ],
              id: 'BMED-4962',
              sec: '01',
              rem: 20,
              title: 'Bme Seminar',
              instructor: 'FNU Rahul'
            },
            '92634': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ]
              ],
              id: 'BMED-6460',
              sec: '01',
              rem: 20,
              title: 'Biological Image Analysis',
              instructor: 'Pingkun Yan'
            },
            '92635': {
              daysTimes: [ [ 'W', { start: 1200, end: 1250 } ] ],
              id: 'BMED-6800',
              sec: '01',
              rem: 65,
              title: 'Discussions In Graduate Research',
              instructor: 'Elizabeth Blaber'
            },
            '92657': {
              daysTimes: [ [ 'R', { start: 1400, end: 1550 } ] ],
              id: 'BMED-6962',
              sec: '01',
              rem: 10,
              title: 'Bme Seminar',
              instructor: 'FNU Rahul'
            },
            '92672': {
              daysTimes: [],
              id: 'BMED-6990',
              sec: '13',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Qun Wan'
            },
            '92981': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'BMED-2300',
              sec: '02',
              rem: 35,
              title: 'Bioimaging/ Bioinstrumentation',
              instructor: 'Ge Wang'
            },
            '93008': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'BMED-4660',
              sec: '01',
              rem: 0,
              title: 'Muscle Mechanics & Modeling',
              instructor: 'David Thomas Corr'
            },
            '93009': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'BMED-6660',
              sec: '01',
              rem: 0,
              title: 'Muscle Mechanics & Modeling',
              instructor: 'David Thomas Corr'
            },
            '93186': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'BMED-2540',
              sec: '02',
              rem: 35,
              title: 'Biomechanics',
              instructor: 'Xun Wang'
            },
            '93187': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ]
              ],
              id: 'BMED-4440',
              sec: '01',
              rem: 20,
              title: 'Biophotonics',
              instructor: 'Xavier R. M. Intes'
            },
            '93188': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ]
              ],
              id: 'BMED-6440',
              sec: '01',
              rem: 15,
              title: 'Biophotonics',
              instructor: 'Xavier R. M. Intes'
            },
            '93229': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Robert J. Linhardt'
            },
            '93347': {
              daysTimes: [],
              id: 'BMED-6980',
              sec: '14',
              rem: 10,
              title: "Master's Project",
              instructor: 'Deepak Vashishth'
            },
            '93434': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1250 } ]
              ],
              id: 'BMED-4260',
              sec: '01',
              rem: 35,
              title: 'Biomedical Product Development & Commercialization',
              instructor: 'Hisham S. Mohamed'
            },
            '93435': {
              daysTimes: [
                [ 'M', { start: 830, end: 950 } ],
                [ 'R', { start: 830, end: 950 } ]
              ],
              id: 'BMED-4410',
              sec: '01',
              rem: 20,
              title: 'Biomems',
              instructor: 'Deanna Marie Thompson'
            },
            '93436': {
              daysTimes: [
                [ 'M', { start: 830, end: 950 } ],
                [ 'R', { start: 830, end: 950 } ]
              ],
              id: 'BMED-6410',
              sec: '01',
              rem: 15,
              title: 'Biomems',
              instructor: 'Deanna Marie Thompson'
            },
            '93465': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '12',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Pingkun Yan'
            },
            '93466': {
              daysTimes: [],
              id: 'BMED-4120',
              sec: '01',
              rem: 5,
              title: 'Investigative Medicine II',
              instructor: 'Douglas Martin Swank'
            },
            '93467': {
              daysTimes: [],
              id: 'BMED-4130',
              sec: '01',
              rem: 16,
              title: 'Biomedical Research',
              instructor: 'Douglas Martin Swank'
            },
            '93742': {
              daysTimes: [
                [ 'M', { start: 830, end: 950 } ],
                [ 'R', { start: 830, end: 950 } ]
              ],
              id: 'BMED-4960',
              sec: '01',
              rem: 20,
              title: 'Ai For Biomedical Applications',
              instructor: 'Uwe Kruger'
            },
            '93743': {
              daysTimes: [
                [ 'M', { start: 830, end: 950 } ],
                [ 'R', { start: 830, end: 950 } ]
              ],
              id: 'BMED-6960',
              sec: '01',
              rem: 20,
              title: 'Ai For Biomedical Applications',
              instructor: 'Uwe Kruger'
            },
            '93769': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'BMED-4480',
              sec: '01',
              rem: 15,
              title: 'Biomedical Data Science',
              instructor: 'Uwe Kruger'
            },
            '93770': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'BMED-6480',
              sec: '01',
              rem: 20,
              title: 'Biomedical Data Science',
              instructor: 'Uwe Kruger'
            },
            '93965': {
              daysTimes: [ [ 'W', { start: 1500, end: 1620 } ] ],
              id: 'BMED-6961',
              sec: '01',
              rem: 0,
              title: "Data Science & Alzheimer's",
              instructor: 'Jennifer Marie Hurley'
            },
            '94215': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'BMED-2050',
              sec: '01',
              rem: 24,
              title: 'Programming For Biomed Engr',
              instructor: 'George Jiren Lee'
            },
            '94217': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'BMED-2050',
              sec: '02',
              rem: 24,
              title: 'Programming For Biomed Engr',
              instructor: 'Monica Agarwal'
            },
            '94218': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'BMED-4250',
              sec: '01',
              rem: 35,
              title: 'Biomed Transport Phenomena',
              instructor: 'Deanna Marie Thompson'
            },
            '94355': {
              daysTimes: [ [ 'T', { start: 1630, end: 1800 } ] ],
              id: 'BMED-6961',
              sec: '02',
              rem: 15,
              title: "Data Science & Alzheimer's",
              instructor: 'Aparna Gupta'
            },
            '94472': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'BMED-6700',
              sec: '01',
              rem: 25,
              title: 'Ethical Issues In Biotechnology',
              instructor: 'Deepak Vashishth'
            },
            '94507': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '22',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Uwe Kruger'
            },
            '94649': {
              daysTimes: [],
              id: 'BMED-9990',
              sec: '17',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jonathan Dordick'
            },
            '94758': {
              daysTimes: [
                [ 'W', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1300, end: 1550 } ]
              ],
              id: 'BMED-4010',
              sec: '03',
              rem: 12,
              title: 'Biomedical Engineering Lab',
              instructor: 'Monica Agarwal'
            },
            '94759': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'BMED-4200',
              sec: '01',
              rem: 35,
              title: 'Modeling Of Biomedical Systems',
              instructor: 'FNU Rahul'
            }
          },
          BUSN: {
            '94251': {
              daysTimes: [],
              id: 'BUSN-6102',
              sec: 'H01',
              rem: 25,
              title: 'Managing Dynamic Organizations',
              instructor: 'Elaine Renz'
            },
            '94252': {
              daysTimes: [],
              id: 'BUSN-6103',
              sec: 'H01',
              rem: 25,
              title: 'Markets, Strategy & People',
              instructor: 'Thomas M. Abbott'
            },
            '94254': {
              daysTimes: [],
              id: 'BUSN-6104',
              sec: 'H01',
              rem: 25,
              title: 'Evaluating Performance',
              instructor: 'Michael Borbath'
            },
            '94257': {
              daysTimes: [],
              id: 'BUSN-6105',
              sec: 'H01',
              rem: 25,
              title: 'Agile Planning & Execution',
              instructor: 'David Joseph Stec'
            },
            '94259': {
              daysTimes: [],
              id: 'BUSN-6106',
              sec: 'H01',
              rem: 25,
              title: 'Leaders As Change Agents',
              instructor: 'Himali J. Stoccatore'
            },
            '94260': {
              daysTimes: [],
              id: 'BUSN-6107',
              sec: 'H01',
              rem: 25,
              title: 'Changing And Innovating',
              instructor: 'Richard Green Chapman'
            },
            '94426': {
              daysTimes: [],
              id: 'BUSN-6300',
              sec: 'H01',
              rem: 40,
              title: 'Leaders & Strategy',
              instructor: 'Rebecca Ann Bompiedi'
            },
            '94760': {
              daysTimes: [],
              id: 'BUSN-6310',
              sec: 'H01',
              rem: 35,
              title: 'Leaders Making Financial Decsn',
              instructor: 'Thomas M. Abbott'
            },
            '94810': {
              daysTimes: [],
              id: 'BUSN-6305',
              sec: 'H01',
              rem: 30,
              title: 'Leaders In Dynamic Markets',
              instructor: 'Richard Green Chapman'
            }
          },
          CHME: {
            '90098': {
              daysTimes: [],
              id: 'CHME-6940',
              sec: '00',
              rem: 0,
              title: 'Rdg In Chemical Engr',
              instructor: 'TBA'
            },
            '90137': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Liping Huang'
            },
            '90138': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Georges Belfort'
            },
            '90139': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '08',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Shekhar S Garde'
            },
            '90140': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '09',
              rem: 15,
              title: 'Dissertation',
              instructor: 'Steven Cramer'
            },
            '90218': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '11',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jonathan Dordick'
            },
            '90257': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '12',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Joel Plawsky'
            },
            '90281': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'CHME-6510',
              sec: '01',
              rem: 20,
              title: 'Adv Transport Phenomena I',
              instructor: 'Patrick T. Underhill'
            },
            '90388': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '16',
              rem: 10,
              title: 'Dissertation',
              instructor: 'B Wayne Bequette'
            },
            '90423': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '21',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Robert J. Linhardt'
            },
            '90528': {
              daysTimes: [],
              id: 'CHME-2940',
              sec: '00',
              rem: 0,
              title: 'Rdgs In Chemical Engr',
              instructor: ''
            },
            '90529': {
              daysTimes: [],
              id: 'CHME-4940',
              sec: '00',
              rem: 0,
              title: 'Rdgs In Chemical Engr',
              instructor: ''
            },
            '90575': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '24',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Theodorian Borca-Tasciuc'
            },
            '90979': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '26',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Diana Andra Borca Tasciuc'
            },
            '91059': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'CHME-4400',
              sec: '01',
              rem: 15,
              title: 'Chromatography Separation Proc',
              instructor: 'Steven Cramer'
            },
            '91106': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Sangwoo Lee'
            },
            '91278': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Todd Przybycien'
            },
            '91334': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Pankaj Karande'
            },
            '91437': {
              daysTimes: [],
              id: 'CHME-6990',
              sec: '01',
              rem: 5,
              title: "Master's Thesis",
              instructor: 'Georges Belfort'
            },
            '91454': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'CHME-4020',
              sec: '01',
              rem: 30,
              title: 'Transport Phenomena II',
              instructor: 'Joel Plawsky'
            },
            '91455': {
              daysTimes: [
                [ 'M', { start: 900, end: 950 } ],
                [ 'W', { start: 1400, end: 1750 } ]
              ],
              id: 'CHME-4170',
              sec: '01',
              rem: 14,
              title: 'Biotechnol & Bioprocessing Lab',
              instructor: 'Jason Mark Warner, Runye H. Zha'
            },
            '91456': {
              daysTimes: [
                [ 'M', { start: 900, end: 950 } ],
                [ 'T', { start: 1400, end: 1750 } ]
              ],
              id: 'CHME-4160',
              sec: '01',
              rem: 16,
              title: 'Chem Engr Lab II',
              instructor: 'Ronald C. Hedden'
            },
            '91457': {
              daysTimes: [
                [ 'M', { start: 900, end: 950 } ],
                [ 'R', { start: 1400, end: 1750 } ]
              ],
              id: 'CHME-4160',
              sec: '02',
              rem: 12,
              title: 'Chem Engr Lab II',
              instructor: 'Ronald C. Hedden'
            },
            '91458': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Patrick T. Underhill'
            },
            '91483': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '10',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Juergen Hahn'
            },
            '91489': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '13',
              rem: 1,
              title: 'Dissertation',
              instructor: 'Esther Alexandra Wertz'
            },
            '91528': {
              daysTimes: [ [ 'W', { start: 900, end: 1050 } ] ],
              id: 'CHME-6963',
              sec: '01',
              rem: 75,
              title: 'Chbe Seminar',
              instructor: 'Vidhya Chakrapani'
            },
            '91824': {
              daysTimes: [],
              id: 'CHME-6990',
              sec: '03',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Joel Plawsky'
            },
            '92116': {
              daysTimes: [],
              id: 'CHME-6990',
              sec: '04',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Steven Cramer'
            },
            '92128': {
              daysTimes: [],
              id: 'CHME-6980',
              sec: '02',
              rem: 10,
              title: 'Masters Project',
              instructor: 'Steven Cramer'
            },
            '92180': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '29',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Mattheos Koffas'
            },
            '92351': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '14',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Juergen Hahn'
            },
            '92383': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '17',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Vidhya Chakrapani'
            },
            '92435': {
              daysTimes: [],
              id: 'CHME-6990',
              sec: '05',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Patrick T. Underhill'
            },
            '92500': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'CHME-6440',
              sec: '01',
              rem: 15,
              title: 'Chromatographic Separation Processes',
              instructor: 'Steven Cramer'
            },
            '92536': {
              daysTimes: [],
              id: 'CHME-6990',
              sec: '07',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Sangwoo Lee'
            },
            '92592': {
              daysTimes: [],
              id: 'CHME-6990',
              sec: '10',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Mattheos Koffas'
            },
            '92686': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'CHME-4010',
              sec: '01',
              rem: 65,
              title: 'Transport Phenomena I',
              instructor: 'Corey Christopher Woodcock'
            },
            '92689': {
              daysTimes: [],
              id: 'CHME-6990',
              sec: '06',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Robert J. Linhardt'
            },
            '92705': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '18',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Richard Alan Gross'
            },
            '92946': {
              daysTimes: [],
              id: 'CHME-6990',
              sec: '25',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Pankaj Karande'
            },
            '93034': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '19',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Sufei Shi'
            },
            '93246': {
              daysTimes: [
                [ 'M', { start: 900, end: 950 } ],
                [ 'R', { start: 1400, end: 1750 } ]
              ],
              id: 'CHME-4170',
              sec: '02',
              rem: 14,
              title: 'Biotechnol & Bioprocessing Lab',
              instructor: 'Runye H. Zha, Jason Mark Warner'
            },
            '93428': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'CHME-4961',
              sec: '01',
              rem: 15,
              title: 'Colloid & Interface Science',
              instructor: 'Sangwoo Lee'
            },
            '93429': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'CHME-6961',
              sec: '01',
              rem: 15,
              title: 'Colloid & Interface Science',
              instructor: 'Sangwoo Lee'
            },
            '93516': {
              daysTimes: [],
              id: 'CHME-6990',
              sec: '08',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Runye H. Zha'
            },
            '93518': {
              daysTimes: [],
              id: 'CHME-9990',
              sec: '20',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Runye H. Zha'
            },
            '93526': {
              daysTimes: [ [ 'W', { start: 1500, end: 1550 } ] ],
              id: 'CHME-6966',
              sec: '01',
              rem: 10,
              title: 'Perspectives In Bms & Eng',
              instructor: 'Deepak Vashishth'
            },
            '93716': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'CHME-2020',
              sec: '01',
              rem: 35,
              title: 'Energy, Entropy, & Equilibrium',
              instructor: 'Pankaj Karande, Ji Young Kim'
            },
            '93726': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'CHME-2050',
              sec: '01',
              rem: 30,
              title: 'Introduction To Computational Chemical Engineering',
              instructor: 'Nihat Baysal'
            },
            '93752': {
              daysTimes: [ [ 'W', { start: -1, end: -1 } ] ],
              id: 'CHME-6966',
              sec: '02',
              rem: 20,
              title: 'Perspectives In Bms & Eng',
              instructor: 'TBA'
            },
            '93978': {
              daysTimes: [],
              id: 'CHME-6990',
              sec: '11',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Todd Przybycien'
            },
            '93979': {
              daysTimes: [],
              id: 'CHME-6990',
              sec: '12',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Vidhya Chakrapani'
            },
            '94300': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'CHME-1100',
              sec: '01',
              rem: 30,
              title: 'Fundmtls Of Chemical Engr',
              instructor: 'Nihat Baysal, Mattheos Koffas'
            },
            '94301': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'CHME-1100',
              sec: '02',
              rem: 30,
              title: 'Fundmtls Of Chemical Engr',
              instructor: 'Nihat Baysal, Mattheos Koffas'
            },
            '94457': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'CHME-4050',
              sec: '01',
              rem: 27,
              title: 'Chemical Process Dsgn: Fdmtl',
              instructor: 'Nihat Baysal, B Wayne Bequette'
            },
            '94458': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'CHME-4050',
              sec: '02',
              rem: 27,
              title: 'Chemical Process Dsgn: Fdmtl',
              instructor: 'Nihat Baysal, B Wayne Bequette'
            },
            '94521': {
              daysTimes: [],
              id: 'CHME-2100',
              sec: '01',
              rem: 30,
              title: 'Chemical Process Safety',
              instructor: 'Joel Plawsky'
            },
            '94522': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ]
              ],
              id: 'CHME-4011',
              sec: '01',
              rem: 15,
              title: 'Semiconductor Electrochemistry',
              instructor: 'Vidhya Chakrapani'
            },
            '94524': {
              daysTimes: [
                [ 'M', { start: 1500, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'CHME-4100',
              sec: '01',
              rem: 15,
              title: 'Finite Element Modeling',
              instructor: 'Corey Christopher Woodcock'
            },
            '94525': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ]
              ],
              id: 'CHME-6011',
              sec: '01',
              rem: 15,
              title: 'Semiconductor Electrochemistry',
              instructor: 'Vidhya Chakrapani'
            },
            '94555': {
              daysTimes: [],
              id: 'CHME-4960',
              sec: '01',
              rem: 60,
              title: 'Chemical Process Design',
              instructor: 'Nihat Baysal'
            },
            '94788': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'CHME-2020',
              sec: '02',
              rem: 35,
              title: 'Energy, Entropy, & Equilibrium',
              instructor: 'Pankaj Karande, Ji Young Kim'
            },
            '94789': {
              daysTimes: [
                [ 'T', { start: 1230, end: 1350 } ],
                [ 'F', { start: 1230, end: 1350 } ]
              ],
              id: 'CHME-4040',
              sec: '01',
              rem: 50,
              title: 'Chemical Eng Separations',
              instructor: 'Todd Przybycien'
            },
            '94790': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'CHME-4500',
              sec: '01',
              rem: 50,
              title: 'Chemical Reactor Design',
              instructor: 'Ronald C. Hedden'
            }
          },
          CHEM: {
            '90017': {
              daysTimes: [ [ 'T', { start: 1600, end: 1720 } ] ],
              id: 'CHEM-6900',
              sec: '01',
              rem: 20,
              title: 'Chemistry Seminar',
              instructor: 'Wilfredo Colon'
            },
            '90018': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ]
              ],
              id: 'CHEM-2030',
              sec: '01',
              rem: 25,
              title: 'Inorganic Chemistry I',
              instructor: 'Peter Henry Dinolfo'
            },
            '90069': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'CHEM-4770',
              sec: '01',
              rem: 25,
              title: 'Molecular Biochem II',
              instructor: 'Keith Fraser'
            },
            '90134': {
              daysTimes: [],
              id: 'CHEM-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Wilfredo Colon'
            },
            '90135': {
              daysTimes: [],
              id: 'CHEM-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Christopher Lawrence Cioffi'
            },
            '90136': {
              daysTimes: [],
              id: 'CHEM-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Curtis Breneman'
            },
            '90230': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'M', { start: 900, end: 950 } ],
                [ 'T', { start: 900, end: 1150 } ]
              ],
              id: 'CHEM-1200',
              sec: '01',
              rem: 30,
              title: 'Chemistry II',
              instructor: 'Alexander C. Ma, Kathleen Lillian Morrissey'
            },
            '90256': {
              daysTimes: [],
              id: 'CHEM-9990',
              sec: '14',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Gaetano T. Montelione'
            },
            '90437': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1750 } ],
                [ 'R', { start: 1400, end: 1750 } ],
                [ 'W', { start: 1000, end: 1050 } ]
              ],
              id: 'CHEM-2290',
              sec: '01',
              rem: 20,
              title: 'Experimental Chemistry II:synthesis And Characterization',
              instructor: 'Filbert Totsingan'
            },
            '90438': {
              daysTimes: [
                [ 'M', { start: 900, end: 1250 } ],
                [ 'R', { start: 900, end: 1250 } ],
                [ 'W', { start: 1100, end: 1150 } ]
              ],
              id: 'CHEM-4120',
              sec: '01',
              rem: 14,
              title: 'Experimental Chemistry Iv:physical And Instrumental Methods',
              instructor: 'Elizabeth Anne Sprague'
            },
            '90454': {
              daysTimes: [],
              id: 'CHEM-2940',
              sec: '00',
              rem: 0,
              title: 'Readings In Chemistry',
              instructor: 'TBA'
            },
            '90513': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ],
                [ 'M', { start: 800, end: 850 } ],
                [ 'R', { start: 1200, end: 1450 } ]
              ],
              id: 'CHEM-1100',
              sec: '01',
              rem: 60,
              title: 'Chemistry I',
              instructor: 'Steven A. Tysoe, Alexander C. Ma, Kathleen Lillian Morrissey'
            },
            '90514': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ],
                [ 'M', { start: 800, end: 850 } ],
                [ 'R', { start: 1500, end: 1750 } ]
              ],
              id: 'CHEM-1100',
              sec: '02',
              rem: 60,
              title: 'Chemistry I',
              instructor: 'Steven A. Tysoe, Alexander C. Ma, Kathleen Lillian Morrissey'
            },
            '90515': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1250 } ],
                [ 'W', { start: 1200, end: 1250 } ],
                [ 'F', { start: 1200, end: 1250 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'CHEM-2260',
              sec: '01',
              rem: 220,
              title: 'Organic Chemistry II',
              instructor: 'Margarita L Kirova-Snover'
            },
            '90518': {
              daysTimes: [
                [ 'M', { start: 1100, end: 1150 } ],
                [ 'T', { start: 1300, end: 1550 } ]
              ],
              id: 'CHEM-2240',
              sec: '03',
              rem: 20,
              title: 'Organic Chemistry Lab II',
              instructor: 'Margarita L Kirova-Snover'
            },
            '90519': {
              daysTimes: [
                [ 'M', { start: 1100, end: 1150 } ],
                [ 'W', { start: 800, end: 1050 } ]
              ],
              id: 'CHEM-2240',
              sec: '04',
              rem: 20,
              title: 'Organic Chemistry Lab II',
              instructor: 'Margarita L Kirova-Snover'
            },
            '90520': {
              daysTimes: [],
              id: 'CHEM-2950',
              sec: '00',
              rem: 0,
              title: 'Undergraduate Research',
              instructor: 'TBA'
            },
            '91054': {
              daysTimes: [
                [ 'M', { start: 1100, end: 1150 } ],
                [ 'T', { start: 800, end: 1050 } ]
              ],
              id: 'CHEM-2240',
              sec: '05',
              rem: 20,
              title: 'Organic Chemistry Lab II',
              instructor: 'Margarita L Kirova-Snover'
            },
            '91105': {
              daysTimes: [],
              id: 'CHEM-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'K. V. Lakshmi'
            },
            '91148': {
              daysTimes: [],
              id: 'CHEM-6990',
              sec: '01',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Wilfredo Colon'
            },
            '91267': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'M', { start: 900, end: 950 } ],
                [ 'W', { start: 900, end: 1150 } ]
              ],
              id: 'CHEM-1200',
              sec: '03',
              rem: 60,
              title: 'Chemistry II',
              instructor: 'Alexander C. Ma, Kathleen Lillian Morrissey'
            },
            '91452': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'M', { start: 900, end: 950 } ],
                [ 'W', { start: 1200, end: 1450 } ]
              ],
              id: 'CHEM-1200',
              sec: '04',
              rem: 60,
              title: 'Chemistry II',
              instructor: 'Alexander C. Ma, Kathleen Lillian Morrissey'
            },
            '91453': {
              daysTimes: [
                [ 'M', { start: 800, end: 850 } ],
                [ 'R', { start: 800, end: 850 } ],
                [ 'W', { start: 800, end: 950 } ]
              ],
              id: 'CHEM-4420',
              sec: '01',
              rem: 35,
              title: 'Microscopic Physical Chemistry',
              instructor: 'Gerald M Korenowski, Amgalanbaatar Baldansuren'
            },
            '91471': {
              daysTimes: [],
              id: 'CHEM-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Blanca L. Barquera'
            },
            '91885': {
              daysTimes: [],
              id: 'CHEM-9990',
              sec: '25',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Peter Henry Dinolfo'
            },
            '92018': {
              daysTimes: [],
              id: 'CHEM-6990',
              sec: '21',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'K. V. Lakshmi'
            },
            '92235': {
              daysTimes: [],
              id: 'CHEM-9990',
              sec: '09',
              rem: 10,
              title: 'Dissertation',
              instructor: 'George I. Makhatadze'
            },
            '92319': {
              daysTimes: [],
              id: 'CHEM-6990',
              sec: '06',
              rem: 5,
              title: "Master's Thesis",
              instructor: 'Peter Henry Dinolfo'
            },
            '92373': {
              daysTimes: [],
              id: 'CHEM-9990',
              sec: '10',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Chulsung Bae'
            },
            '92376': {
              daysTimes: [
                [ 'M', { start: 1100, end: 1150 } ],
                [ 'F', { start: 1300, end: 1550 } ]
              ],
              id: 'CHEM-2240',
              sec: '06',
              rem: 20,
              title: 'Organic Chemistry Lab II',
              instructor: 'Margarita L Kirova-Snover'
            },
            '92607': {
              daysTimes: [],
              id: 'CHEM-6990',
              sec: '07',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Chulsung Bae'
            },
            '92679': {
              daysTimes: [],
              id: 'CHEM-9990',
              sec: '15',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Richard Alan Gross'
            },
            '93038': {
              daysTimes: [],
              id: 'CHEM-9990',
              sec: '12',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Catherine Ann Royer'
            },
            '93087': {
              daysTimes: [],
              id: 'CHEM-6990',
              sec: '08',
              rem: 1,
              title: "Master's Thesis",
              instructor: 'Richard Alan Gross'
            },
            '93228': {
              daysTimes: [],
              id: 'CHEM-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jacob Thomas Shelley'
            },
            '93470': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'CHEM-1600',
              sec: '01',
              rem: 0,
              title: 'Materials Science',
              instructor: 'TBA'
            },
            '93472': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'CHEM-1600',
              sec: '02',
              rem: 5,
              title: 'Materials Science',
              instructor: 'John R. LaGraff, Chaitanya Kishore Ullal'
            },
            '93475': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'CHEM-1600',
              sec: '03',
              rem: 5,
              title: 'Materials Science',
              instructor: 'Ravishankar Sundararaman, John R. LaGraff, Chaitanya Kishore Ullal'
            },
            '93478': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'CHEM-1600',
              sec: '04',
              rem: 5,
              title: 'Materials Science',
              instructor: 'Wei Bao, John R. LaGraff, Chaitanya Kishore Ullal'
            },
            '93525': {
              daysTimes: [
                [ 'M', { start: 1100, end: 1150 } ],
                [ 'R', { start: 800, end: 1050 } ]
              ],
              id: 'CHEM-2240',
              sec: '02',
              rem: 20,
              title: 'Organic Chemistry Lab II',
              instructor: 'Margarita L Kirova-Snover'
            },
            '93549': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ]
              ],
              id: 'CHEM-6610',
              sec: '01',
              rem: 25,
              title: 'Natural And Biobased Polmers And Materials',
              instructor: 'Richard Alan Gross'
            },
            '93746': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ],
                [ 'M', { start: 800, end: 850 } ],
                [ 'F', { start: 1000, end: 1250 } ]
              ],
              id: 'CHEM-1100',
              sec: '03',
              rem: 60,
              title: 'Chemistry I',
              instructor: 'Steven A. Tysoe, Alexander C. Ma, Kathleen Lillian Morrissey'
            },
            '93919': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'M', { start: 900, end: 950 } ]
              ],
              id: 'CHEM-1210',
              sec: '01',
              rem: 20,
              title: 'Chemistry II Without Lab',
              instructor: 'Alexander C. Ma, Kathleen Lillian Morrissey'
            },
            '93920': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'CHEM-4140',
              sec: '01',
              rem: 20,
              title: 'Nmr Spectroscopy',
              instructor: 'K. V. Lakshmi'
            },
            '93921': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'CHEM-6140',
              sec: '01',
              rem: 20,
              title: 'Nmr Spectroscopy',
              instructor: 'K. V. Lakshmi'
            },
            '93968': {
              daysTimes: [
                [ 'T', { start: 800, end: 920 } ],
                [ 'F', { start: 800, end: 920 } ]
              ],
              id: 'CHEM-4200',
              sec: '01',
              rem: 25,
              title: 'Industrial Chemistry',
              instructor: 'Alexander C. Ma'
            },
            '94000': {
              daysTimes: [],
              id: 'CHEM-9990',
              sec: '06',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Chunyu Wang'
            },
            '94230': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'CHEM-4810',
              sec: '01',
              rem: 20,
              title: 'Chem Of The Environment',
              instructor: 'Simon Nicholas Platts'
            },
            '94242': {
              daysTimes: [ [ 'W', { start: 1600, end: 1750 } ] ],
              id: 'CHEM-4964',
              sec: '01',
              rem: 30,
              title: 'History Of Chemistry',
              instructor: 'Steven A. Tysoe'
            },
            '94345': {
              daysTimes: [],
              id: 'CHEM-4950',
              sec: '01',
              rem: 20,
              title: 'Culminating Research Exp',
              instructor: 'Gerald M Korenowski'
            },
            '94417': {
              daysTimes: [],
              id: 'CHEM-6970',
              sec: '03',
              rem: 0,
              title: 'Professional Project',
              instructor: 'Peter Henry Dinolfo'
            },
            '94593': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'M', { start: 900, end: 950 } ],
                [ 'T', { start: 1200, end: 1450 } ]
              ],
              id: 'CHEM-1200',
              sec: '02',
              rem: 60,
              title: 'Chemistry II',
              instructor: 'Alexander C. Ma, Kathleen Lillian Morrissey'
            },
            '94595': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'CHEM-4965',
              sec: '01',
              rem: 20,
              title: 'Hydrothermal Expmt Methods',
              instructor: 'Kristin Nicole Johnson'
            },
            '94596': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'CHEM-6965',
              sec: '01',
              rem: 20,
              title: 'Hydrothermal Expmt Methods',
              instructor: 'Kristin Nicole Johnson'
            },
            '94599': {
              daysTimes: [
                [ 'M', { start: 1300, end: 1350 } ],
                [ 'W', { start: 1300, end: 1350 } ],
                [ 'R', { start: 1300, end: 1350 } ]
              ],
              id: 'CHEM-4620',
              sec: '01',
              rem: 25,
              title: 'Intro Polymer Chemistry',
              instructor: 'Chulsung Bae'
            },
            '94600': {
              daysTimes: [
                [ 'M', { start: 1300, end: 1350 } ],
                [ 'W', { start: 1300, end: 1350 } ],
                [ 'R', { start: 1300, end: 1350 } ]
              ],
              id: 'CHEM-6620',
              sec: '01',
              rem: 25,
              title: 'Polymer Chemistry',
              instructor: 'Chulsung Bae'
            },
            '94601': {
              daysTimes: [ [ 'W', { start: 900, end: 1050 } ] ],
              id: 'CHEM-4966',
              sec: '01',
              rem: 25,
              title: 'Xray Diffraction & Crystal Str',
              instructor: 'Peter John Bonitatibus'
            },
            '94602': {
              daysTimes: [ [ 'W', { start: 900, end: 1050 } ] ],
              id: 'CHEM-6966',
              sec: '01',
              rem: 25,
              title: 'Xray Diffraction & Crystal Str',
              instructor: 'Peter John Bonitatibus'
            },
            '94678': {
              daysTimes: [],
              id: 'CHEM-9990',
              sec: '13',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Peter John Bonitatibus'
            },
            '94739': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ]
              ],
              id: 'CHEM-4610',
              sec: '01',
              rem: 25,
              title: 'Natural Polymers & Materials',
              instructor: 'Richard Alan Gross'
            },
            '94778': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'M', { start: 900, end: 950 } ],
                [ 'T', { start: 900, end: 1150 } ]
              ],
              id: 'CHEM-1220',
              sec: '01',
              rem: 30,
              title: 'Chemistry II Honors',
              instructor: 'Alexander C. Ma, Kathleen Lillian Morrissey'
            },
            '94779': {
              daysTimes: [
                [ 'M', { start: 1100, end: 1150 } ],
                [ 'F', { start: 800, end: 1050 } ]
              ],
              id: 'CHEM-2240',
              sec: '01',
              rem: 20,
              title: 'Organic Chemistry Lab II',
              instructor: 'Margarita L Kirova-Snover'
            },
            '94783': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'CHEM-4300',
              sec: '01',
              rem: 20,
              title: 'Medicinal Chemistry',
              instructor: 'Christopher Lawrence Cioffi'
            },
            '94785': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'CHEM-6300',
              sec: '01',
              rem: 20,
              title: 'Medicinal Chemistry',
              instructor: 'Christopher Lawrence Cioffi'
            },
            '94801': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'CHEM-6962',
              sec: '01',
              rem: 20,
              title: 'Proteomics-str Bioinformatics',
              instructor: 'Gaetano T. Montelione'
            },
            '94802': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'CHEM-4962',
              sec: '01',
              rem: 20,
              title: 'Proteomics-str Bioinformatics',
              instructor: 'Gaetano T. Montelione'
            },
            '94842': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ],
                [ 'T', { start: 900, end: 1150 } ],
                [ 'F', { start: 900, end: 1150 } ]
              ],
              id: 'CHEM-4530',
              sec: '01',
              rem: 16,
              title: 'Modern Techniques In Chemistry',
              instructor: 'Simon Nicholas Platts'
            }
          },
          CIVL: {
            '90091': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'CIVL-6900',
              sec: '01',
              rem: 15,
              title: 'Civl And Environmental Engineering Graduate Seminar',
              instructor: 'Shun Uchida'
            },
            '90102': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'T', { start: 1200, end: 1350 } ]
              ],
              id: 'CIVL-4150',
              sec: '01',
              rem: 14,
              title: 'Geotechnical Design',
              instructor: 'Omar Osama El-Shafee'
            },
            '90129': {
              daysTimes: [
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'CIVL-4270',
              sec: '01',
              rem: 25,
              title: 'Construction Management',
              instructor: 'Paul McCoy'
            },
            '90141': {
              daysTimes: [],
              id: 'CIVL-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Michael Symans'
            },
            '90142': {
              daysTimes: [],
              id: 'CIVL-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jose E. Holguin-Veras'
            },
            '90143': {
              daysTimes: [],
              id: 'CIVL-6990',
              sec: '03',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Jose E. Holguin-Veras'
            },
            '90147': {
              daysTimes: [],
              id: 'CIVL-9990',
              sec: '06',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Mourad Zeghal'
            },
            '90285': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'CIVL-4920',
              sec: '01',
              rem: 70,
              title: 'Civil Engineering Capstone Design',
              instructor: 'John M. Reilly'
            },
            '90409': {
              daysTimes: [],
              id: 'CIVL-9990',
              sec: '08',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Tarek H Abdoun'
            },
            '90410': {
              daysTimes: [],
              id: 'CIVL-9990',
              sec: '09',
              rem: 25,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90444': {
              daysTimes: [],
              id: 'CIVL-6990',
              sec: '08',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Tarek H Abdoun'
            },
            '90455': {
              daysTimes: [],
              id: 'CIVL-2940',
              sec: '00',
              rem: 0,
              title: 'Readings In Civl',
              instructor: ''
            },
            '90456': {
              daysTimes: [],
              id: 'CIVL-4940',
              sec: '00',
              rem: 0,
              title: 'Readings In Civl',
              instructor: ''
            },
            '90457': {
              daysTimes: [],
              id: 'CIVL-6940',
              sec: '00',
              rem: 0,
              title: 'Rdgs In Civil Engr',
              instructor: ''
            },
            '90522': {
              daysTimes: [
                [ 'M', { start: 1800, end: 2050 } ],
                [ 'R', { start: 1800, end: 2050 } ]
              ],
              id: 'CIVL-6320',
              sec: '01',
              rem: 40,
              title: 'Adv Steel Design',
              instructor: 'Mark C. Kanonik'
            },
            '91288': {
              daysTimes: [],
              id: 'CIVL-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Xiaozheng He'
            },
            '91843': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'CIVL-4440',
              sec: '01',
              rem: 25,
              title: 'Matrix Structural Analysis',
              instructor: 'Michael Symans'
            },
            '91926': {
              daysTimes: [],
              id: 'CIVL-6990',
              sec: '02',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Michael Symans'
            },
            '92244': {
              daysTimes: [],
              id: 'CIVL-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Christopher W Letchford'
            },
            '92245': {
              daysTimes: [],
              id: 'CIVL-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Xiaokun Wang'
            },
            '92249': {
              daysTimes: [],
              id: 'CIVL-6980',
              sec: '01',
              rem: 10,
              title: "Master's Project",
              instructor: 'Marianne C. Nyman'
            },
            '92343': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'CIVL-4020',
              sec: '01',
              rem: 12,
              title: 'Bedford Seminar',
              instructor: 'James Norman Richardson'
            },
            '92344': {
              daysTimes: [ [ 'W', { start: 1400, end: 1750 } ] ],
              id: 'CIVL-6340',
              sec: '01',
              rem: 10,
              title: 'Bedford Design Studio',
              instructor: 'James Norman Richardson'
            },
            '92348': {
              daysTimes: [ [ 'R', { start: 1800, end: 1950 } ] ],
              id: 'CIVL-1100',
              sec: '01',
              rem: 92,
              title: 'Introduction To Civil And Environmental Engineering',
              instructor: 'Christos Varsamis'
            },
            '92349': {
              daysTimes: [ [ 'F', { start: 1200, end: 1350 } ] ],
              id: 'CIVL-4450',
              sec: '01',
              rem: 25,
              title: 'Conceptual Structural Systems',
              instructor: 'Justin Henry Den Herder'
            },
            '92405': {
              daysTimes: [],
              id: 'CIVL-6990',
              sec: '09',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Xiaokun Wang'
            },
            '92408': {
              daysTimes: [],
              id: 'CIVL-6990',
              sec: '07',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Christopher W Letchford'
            },
            '92413': {
              daysTimes: [],
              id: 'CIVL-6990',
              sec: '10',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Mourad Zeghal'
            },
            '92455': {
              daysTimes: [],
              id: 'CIVL-6910',
              sec: '01',
              rem: 0,
              title: 'Colloquium Series',
              instructor: ''
            },
            '92545': {
              daysTimes: [],
              id: 'CIVL-6990',
              sec: '12',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Victoria Gene Bennett'
            },
            '92668': {
              daysTimes: [],
              id: 'CIVL-9990',
              sec: '13',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Victoria Gene Bennett'
            },
            '92968': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'CIVL-4280',
              sec: '01',
              rem: 25,
              title: 'Design For Constructability',
              instructor: 'Steven Paul Hagy'
            },
            '93182': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'CIVL-4240',
              sec: '01',
              rem: 5,
              title: 'Intro To Finite Elements',
              instructor: 'Kartik Josyula'
            },
            '93218': {
              daysTimes: [],
              id: 'CIVL-9990',
              sec: '15',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Shun Uchida'
            },
            '93445': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'CIVL-4961',
              sec: '01',
              rem: 25,
              title: 'Bedford Digital Tools Dev.',
              instructor: 'Jillian Marie Crandall'
            },
            '93649': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'CIVL-2030',
              sec: '01',
              rem: 75,
              title: 'Intro Transportation Engineeri',
              instructor: 'Ruimin Ke'
            },
            '93654': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'CIVL-2670',
              sec: '01',
              rem: 14,
              title: 'Intro To Structural Eng',
              instructor: 'Julia D Carroll'
            },
            '93656': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'CIVL-2670',
              sec: '02',
              rem: 14,
              title: 'Intro To Structural Eng',
              instructor: 'Julia D Carroll'
            },
            '93657': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ],
                [ 'T', { start: 1000, end: 1150 } ]
              ],
              id: 'CIVL-2670',
              sec: '03',
              rem: 14,
              title: 'Intro To Structural Eng',
              instructor: 'Julia D Carroll'
            },
            '93658': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'CIVL-2670',
              sec: '04',
              rem: 14,
              title: 'Intro To Structural Eng',
              instructor: 'Julia D Carroll'
            },
            '93659': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'CIVL-2670',
              sec: '05',
              rem: 14,
              title: 'Intro To Structural Eng',
              instructor: 'Julia D Carroll'
            },
            '93660': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'M', { start: 1400, end: 1550 } ]
              ],
              id: 'CIVL-2630',
              sec: '01',
              rem: 15,
              title: 'Intro To Geotechnical Engr',
              instructor: 'Victoria Gene Bennett'
            },
            '93661': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'CIVL-2630',
              sec: '02',
              rem: 15,
              title: 'Intro To Geotechnical Engr',
              instructor: 'Victoria Gene Bennett'
            },
            '93662': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'T', { start: 1000, end: 1150 } ]
              ],
              id: 'CIVL-2630',
              sec: '03',
              rem: 15,
              title: 'Intro To Geotechnical Engr',
              instructor: 'Victoria Gene Bennett'
            },
            '93663': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'CIVL-2630',
              sec: '04',
              rem: 10,
              title: 'Intro To Geotechnical Engr',
              instructor: 'Victoria Gene Bennett'
            },
            '93665': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'CIVL-2630',
              sec: '05',
              rem: 15,
              title: 'Intro To Geotechnical Engr',
              instructor: 'Victoria Gene Bennett'
            },
            '93689': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'CIVL-4240',
              sec: '02',
              rem: 5,
              title: 'Intro To Finite Elements',
              instructor: 'Mark S Shephard'
            },
            '93762': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'CIVL-4150',
              sec: '02',
              rem: 14,
              title: 'Geotechnical Design',
              instructor: 'Omar Osama El-Shafee'
            },
            '93880': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'CIVL-4240',
              sec: '03',
              rem: 5,
              title: 'Intro To Finite Elements',
              instructor: 'Ali Shahsavari'
            },
            '94115': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'CIVL-4620',
              sec: '01',
              rem: 20,
              title: 'Mass Transit Systems',
              instructor: 'John M. Reilly'
            },
            '94121': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 800, end: 950 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'CIVL-2060',
              sec: '01',
              rem: 20,
              title: 'Intro Water Resource Eng',
              instructor: 'Daniel Chapman Lander'
            },
            '94122': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'CIVL-4570',
              sec: '01',
              rem: 25,
              title: 'System Modeling For Civl & Env',
              instructor: 'Tathagata Bhaduri'
            },
            '94309': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'CIVL-1300',
              sec: '01',
              rem: 75,
              title: 'Beg Program Civl & Envir Engr',
              instructor: 'Tathagata Bhaduri'
            },
            '94357': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'CIVL-2060',
              sec: '02',
              rem: 20,
              title: 'Intro Water Resource Eng',
              instructor: 'Daniel Chapman Lander'
            },
            '94429': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'CIVL-2060',
              sec: '03',
              rem: 20,
              title: 'Intro Water Resource Eng',
              instructor: 'Daniel Chapman Lander'
            },
            '94430': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'CIVL-6530',
              sec: '01',
              rem: 25,
              title: 'Adv Seepage, Drainage, Grndwtr',
              instructor: 'Shun Uchida'
            },
            '94450': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'T', { start: 1600, end: 1800 } ]
              ],
              id: 'CIVL-4080',
              sec: '01',
              rem: 10,
              title: 'Concrete Design',
              instructor: 'Christos Varsamis'
            },
            '94451': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1600, end: 1800 } ]
              ],
              id: 'CIVL-4080',
              sec: '02',
              rem: 10,
              title: 'Concrete Design',
              instructor: 'Christos Varsamis'
            },
            '94452': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1600, end: 1800 } ]
              ],
              id: 'CIVL-4080',
              sec: '03',
              rem: 10,
              title: 'Concrete Design',
              instructor: 'Christos Varsamis'
            },
            '94717': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'CIVL-4530',
              sec: '01',
              rem: 25,
              title: 'Seepage, Drainage, Groundwater',
              instructor: 'Shun Uchida'
            },
            '94718': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'CIVL-6260',
              sec: '01',
              rem: 25,
              title: 'Trans Network Analysis',
              instructor: 'Xiaozheng He'
            },
            '94724': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'CIVL-6960',
              sec: '01',
              rem: 25,
              title: 'Infrastructe Reliability',
              instructor: 'Min Li'
            },
            '94726': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'CIVL-6490',
              sec: '01',
              rem: 15,
              title: 'Earthquake Engr',
              instructor: 'Christos Varsamis'
            }
          },
          COGS: {
            '90447': {
              daysTimes: [ [ 'W', { start: 1130, end: 1350 } ] ],
              id: 'COGS-6961',
              sec: '01',
              rem: 60,
              title: 'Research Problems In Cog Sci',
              instructor: 'Ron Sun'
            },
            '92215': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'COGS-2120',
              sec: '01',
              rem: 49,
              title: 'Intro To Cognitive Science',
              instructor: 'Bram Van Heuveln, Benjamin P. Weissman'
            },
            '92363': {
              daysTimes: [],
              id: 'COGS-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Brett R. Fajen'
            },
            '92366': {
              daysTimes: [],
              id: 'COGS-4990',
              sec: '02',
              rem: 10,
              title: 'Undergraduate Thesis',
              instructor: 'Bram Van Heuveln'
            },
            '92378': {
              daysTimes: [],
              id: 'COGS-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Wayne D. Gray'
            },
            '92379': {
              daysTimes: [],
              id: 'COGS-4990',
              sec: '03',
              rem: 10,
              title: 'Undergraduate Thesis',
              instructor: 'John R Milanese'
            },
            '92385': {
              daysTimes: [],
              id: 'COGS-6990',
              sec: '02',
              rem: 10,
              title: 'Masters Thesis',
              instructor: 'Brett R. Fajen'
            },
            '92387': {
              daysTimes: [],
              id: 'COGS-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Selmer Bringsjord'
            },
            '92400': {
              daysTimes: [],
              id: 'COGS-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'James A. Hendler'
            },
            '92439': {
              daysTimes: [],
              id: 'COGS-4990',
              sec: '07',
              rem: 10,
              title: 'Undergraduate Thesis',
              instructor: 'Ron Sun'
            },
            '92456': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'COGS-4610',
              sec: '01',
              rem: 4,
              title: 'Stress And The Brain',
              instructor: 'Alicia Ann Walf'
            },
            '92543': {
              daysTimes: [],
              id: 'COGS-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Sergei Nirenburg'
            },
            '92544': {
              daysTimes: [],
              id: 'COGS-9990',
              sec: '08',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Marjorie McShane'
            },
            '92552': {
              daysTimes: [],
              id: 'COGS-4990',
              sec: '08',
              rem: 10,
              title: 'Undergraduate Thesis',
              instructor: 'Mei Si'
            },
            '92558': {
              daysTimes: [],
              id: 'COGS-4990',
              sec: '09',
              rem: 10,
              title: 'Undergraduate Thesis',
              instructor: 'Brett R. Fajen'
            },
            '92567': {
              daysTimes: [],
              id: 'COGS-6980',
              sec: '02',
              rem: 10,
              title: "Master's Project",
              instructor: 'Sergei Nirenburg'
            },
            '92568': {
              daysTimes: [],
              id: 'COGS-6980',
              sec: '01',
              rem: 10,
              title: "Master's Project",
              instructor: 'Ron Sun'
            },
            '92598': {
              daysTimes: [],
              id: 'COGS-9990',
              sec: '09',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Mei Si'
            },
            '92599': {
              daysTimes: [],
              id: 'COGS-4990',
              sec: '11',
              rem: 10,
              title: 'Undergraduate Thesis',
              instructor: 'Ralph G Noble'
            },
            '92673': {
              daysTimes: [],
              id: 'COGS-9990',
              sec: '11',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ron Sun'
            },
            '92714': {
              daysTimes: [],
              id: 'COGS-6980',
              sec: '03',
              rem: 10,
              title: "Master's Project",
              instructor: 'Mei Si'
            },
            '93021': {
              daysTimes: [],
              id: 'COGS-4990',
              sec: '12',
              rem: 10,
              title: 'Undergraduate Thesis',
              instructor: 'Selmer Bringsjord'
            },
            '93294': {
              daysTimes: [],
              id: 'COGS-4990',
              sec: '13',
              rem: 10,
              title: 'Undergraduate Thesis',
              instructor: 'Alicia Ann Walf'
            },
            '93739': {
              daysTimes: [],
              id: 'COGS-4990',
              sec: '14',
              rem: 10,
              title: 'Undergraduate Thesis',
              instructor: 'Marjorie McShane'
            },
            '93852': {
              daysTimes: [],
              id: 'COGS-6980',
              sec: '05',
              rem: 10,
              title: "Master's Project",
              instructor: 'Selmer Bringsjord'
            },
            '93864': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'COGS-2340',
              sec: '02',
              rem: 19,
              title: 'Introduction To Linguistics',
              instructor: 'Benjamin P. Weissman'
            },
            '93943': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'COGS-4960',
              sec: '01',
              rem: 29,
              title: 'Social Computing',
              instructor: 'Tomasz Strzalkowski'
            },
            '93944': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'COGS-6960',
              sec: '01',
              rem: 29,
              title: 'Social Computing',
              instructor: 'Tomasz Strzalkowski'
            },
            '94056': {
              daysTimes: [],
              id: 'COGS-6990',
              sec: '06',
              rem: 10,
              title: 'Masters Thesis',
              instructor: 'Sergei Nirenburg'
            },
            '94057': {
              daysTimes: [],
              id: 'COGS-6980',
              sec: '07',
              rem: 10,
              title: "Master's Project",
              instructor: 'Brett R. Fajen'
            },
            '94058': {
              daysTimes: [],
              id: 'COGS-9990',
              sec: '13',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Christopher Robert Sims'
            },
            '94059': {
              daysTimes: [],
              id: 'COGS-9990',
              sec: '14',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Tomasz Strzalkowski'
            },
            '94148': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'COGS-2340',
              sec: '01',
              rem: 19,
              title: 'Introduction To Linguistics',
              instructor: 'Benjamin P. Weissman'
            },
            '94149': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'COGS-4880',
              sec: '01',
              rem: 19,
              title: 'Language-endowed Intel Agents',
              instructor: 'Sergei Nirenburg'
            },
            '94150': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'COGS-6880',
              sec: '01',
              rem: 10,
              title: 'Language-endowed Intel Agents',
              instructor: 'Sergei Nirenburg'
            },
            '94280': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'COGS-4220',
              sec: '01',
              rem: 30,
              title: 'Animal Cognition&inter W/human',
              instructor: 'Marjorie McShane'
            },
            '94313': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'COGS-2120',
              sec: '02',
              rem: 49,
              title: 'Intro To Cognitive Science',
              instructor: 'Benjamin P. Weissman, Bram Van Heuveln'
            },
            '94318': {
              daysTimes: [],
              id: 'COGS-6980',
              sec: '08',
              rem: 10,
              title: "Master's Project",
              instructor: 'Alicia Ann Walf'
            },
            '94416': {
              daysTimes: [],
              id: 'COGS-4990',
              sec: '15',
              rem: 1,
              title: 'Undergraduate Thesis',
              instructor: 'Bram Van Heuveln'
            },
            '94543': {
              daysTimes: [],
              id: 'COGS-6980',
              sec: '09',
              rem: 10,
              title: "Master's Project",
              instructor: 'Tomasz Strzalkowski'
            },
            '94832': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'COGS-4210',
              sec: '01',
              rem: 19,
              title: 'Cognitive Modeling',
              instructor: 'Stefan Tomov Radev'
            },
            '94833': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'COGS-6210',
              sec: '01',
              rem: 19,
              title: 'Cognitive Modeling I',
              instructor: 'Stefan Tomov Radev'
            },
            '94834': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'COGS-4780',
              sec: '01',
              rem: 19,
              title: 'Advanced Topics In Linguistics',
              instructor: 'Benjamin P. Weissman'
            },
            '94929': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'COGS-4610',
              sec: '02',
              rem: 8,
              title: 'Stress And The Brain',
              instructor: 'Alicia Ann Walf'
            },
            '94932': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'COGS-4360',
              sec: '01',
              rem: 10,
              title: 'Behavioral Neuroscience',
              instructor: 'Alicia Ann Walf'
            },
            '94933': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'COGS-4360',
              sec: '02',
              rem: 10,
              title: 'Behavioral Neuroscience',
              instructor: 'Alicia Ann Walf'
            },
            '94934': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'COGS-4961',
              sec: '01',
              rem: 12,
              title: 'Language Learning',
              instructor: 'Marjorie McShane'
            }
          },
          COMM: {
            '90148': {
              daysTimes: [],
              id: 'COMM-6990',
              sec: '01',
              rem: 100,
              title: "Master's Thesis",
              instructor: 'TBA'
            },
            '90530': {
              daysTimes: [],
              id: 'COMM-2940',
              sec: '00',
              rem: 0,
              title: 'Readings In Comm',
              instructor: ''
            },
            '90531': {
              daysTimes: [],
              id: 'COMM-4940',
              sec: '00',
              rem: 0,
              title: 'Readings In Comm',
              instructor: ''
            },
            '90532': {
              daysTimes: [],
              id: 'COMM-6940',
              sec: '00',
              rem: 0,
              title: 'Studies In Communication',
              instructor: ''
            },
            '91920': {
              daysTimes: [],
              id: 'COMM-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Tamar Gordon'
            },
            '92098': {
              daysTimes: [],
              id: 'COMM-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Yalun Zhou'
            },
            '92389': {
              daysTimes: [],
              id: 'COMM-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'June Deery'
            },
            '93393': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'COMM-4470',
              sec: '01',
              rem: 19,
              title: 'Information Design',
              instructor: 'Benjamin David Gleeksman'
            },
            '93400': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'COMM-2570',
              sec: '01',
              rem: 16,
              title: 'Typography',
              instructor: 'Sara L. Tack'
            },
            '93696': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'COMM-2520',
              sec: '01',
              rem: 16,
              title: 'Communication Theory & Prac.',
              instructor: 'Weina Ran'
            },
            '93697': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'COMM-2520',
              sec: '02',
              rem: 3,
              title: 'Communication Theory & Prac.',
              instructor: 'Weina Ran'
            },
            '93698': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'COMM-2520',
              sec: '03',
              rem: 16,
              title: 'Communication Theory & Prac.',
              instructor: 'Weina Ran'
            },
            '93699': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'COMM-2520',
              sec: '04',
              rem: 3,
              title: 'Communication Theory & Prac.',
              instructor: 'Weina Ran'
            },
            '93736': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'COMM-2570',
              sec: '02',
              rem: 3,
              title: 'Typography',
              instructor: 'Sara L. Tack'
            },
            '93763': {
              daysTimes: [],
              id: 'COMM-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Patricia Search'
            },
            '93889': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'COMM-2660',
              sec: '01',
              rem: 16,
              title: 'Introduction To Graphic Design',
              instructor: 'Benjamin David Gleeksman'
            },
            '93890': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'COMM-2660',
              sec: '02',
              rem: 3,
              title: 'Introduction To Graphic Design',
              instructor: 'Benjamin David Gleeksman'
            },
            '93977': {
              daysTimes: [],
              id: 'COMM-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Miles A Kimball'
            },
            '93994': {
              daysTimes: [
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'COMM-1960',
              sec: '01',
              rem: 20,
              title: 'Eff Comm For Class Pedagogy',
              instructor: 'Anita Kay Greenfield'
            },
            '94152': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'COMM-4730',
              sec: '01',
              rem: 19,
              title: 'Brand Identity Design',
              instructor: 'Sara L. Tack'
            },
            '94315': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'COMM-6730',
              sec: '01',
              rem: 19,
              title: 'Brand Identity Design',
              instructor: 'Sara L. Tack'
            },
            '94496': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'COMM-2520',
              sec: '05',
              rem: 19,
              title: 'Communication Theory & Prac.',
              instructor: 'Alexander Scott Hiland'
            },
            '94498': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'COMM-4188',
              sec: '01',
              rem: 19,
              title: 'Social Media & Stratgc Comm',
              instructor: 'Weina Ran'
            },
            '94579': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'COMM-2660',
              sec: '03',
              rem: 19,
              title: 'Introduction To Graphic Design',
              instructor: 'Benjamin David Gleeksman'
            },
            '94843': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'COMM-4960',
              sec: '01',
              rem: 15,
              title: 'Adaptation In Games & Media',
              instructor: 'Christopher C. Jeansonne'
            },
            '94847': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'COMM-4690',
              sec: '01',
              rem: 19,
              title: 'Interface Design:hypermedia Theory And Application',
              instructor: 'Patricia Search'
            },
            '94849': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'COMM-6960',
              sec: '01',
              rem: 4,
              title: 'Adaptation In Game & Media',
              instructor: 'Christopher C. Jeansonne'
            },
            '94865': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'COMM-4540',
              sec: '01',
              rem: 19,
              title: 'Visual Culture',
              instructor: 'Andrew Arthur Fitzgerald'
            }
          },
          CSCI: {
            '90144': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '01',
              rem: 15,
              title: 'Dissertation',
              instructor: 'Mohammed J. Zaki'
            },
            '90149': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Charles V Stewart'
            },
            '90206': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '06',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Alex Algernon Theodore Gittens'
            },
            '90282': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-4210',
              sec: '01',
              rem: 200,
              title: 'Operating Systems',
              instructor: 'Wesley D Turner'
            },
            '90284': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-2300',
              sec: '04',
              rem: 40,
              title: 'Introduction To Algorithms',
              instructor: 'David Eric Goldschmidt, Xiaoyang Liu'
            },
            '90286': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-4800',
              sec: '01',
              rem: 70,
              title: 'Numerical Computing',
              instructor: 'Yuri V Lvov'
            },
            '90288': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 800, end: 950 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-2300',
              sec: '02',
              rem: 40,
              title: 'Introduction To Algorithms',
              instructor: 'David Eric Goldschmidt, Xiaoyang Liu'
            },
            '90297': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '08',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Selmer Bringsjord'
            },
            '90307': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-4020',
              sec: '01',
              rem: 65,
              title: 'Design And Analysis Of Algorithms',
              instructor: 'Elliot I. Anshelevich'
            },
            '90318': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '09',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Mark S Shephard'
            },
            '90324': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '12',
              rem: 10,
              title: 'Dissertation',
              instructor: 'W. Randolph Franklin'
            },
            '90325': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '14',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Sibel Adali'
            },
            '90326': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '15',
              rem: 0,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90327': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '16',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Boleslaw Szymanski'
            },
            '90341': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1100',
              sec: '01',
              rem: 24,
              title: 'Computer Science I',
              instructor: 'John Sturman, Shianne M. Hulbert'
            },
            '90342': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1100',
              sec: '02',
              rem: 24,
              title: 'Computer Science I',
              instructor: 'John Sturman, Shianne M. Hulbert'
            },
            '90343': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1100',
              sec: '03',
              rem: 24,
              title: 'Computer Science I',
              instructor: 'John Sturman, Shianne M. Hulbert'
            },
            '90344': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'W', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1100',
              sec: '04',
              rem: 24,
              title: 'Computer Science I',
              instructor: 'John Sturman, Shianne M. Hulbert'
            },
            '90345': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'W', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1100',
              sec: '05',
              rem: 24,
              title: 'Computer Science I',
              instructor: 'John Sturman, Shianne M. Hulbert'
            },
            '90346': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '01',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Jidong Xiao, Shianne M. Hulbert, Neha Keshan'
            },
            '90347': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '02',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Jidong Xiao, Shianne M. Hulbert, Neha Keshan'
            },
            '90348': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '03',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Jidong Xiao, Shianne M. Hulbert, Neha Keshan'
            },
            '90349': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '04',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Jidong Xiao, Shianne M. Hulbert, Neha Keshan'
            },
            '90350': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '05',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Jidong Xiao, Shianne M. Hulbert, Neha Keshan'
            },
            '90351': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '06',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Jidong Xiao, Shianne M. Hulbert, Neha Keshan'
            },
            '90352': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '07',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Jidong Xiao, Shianne M. Hulbert, Neha Keshan'
            },
            '90381': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '16',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Boleslaw Szymanski'
            },
            '90385': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '17',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'W. Randolph Franklin'
            },
            '90386': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '20',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Bulent Yener'
            },
            '90411': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '29',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Malik Magdon-Ismail'
            },
            '90412': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '32',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Carlos A Varela'
            },
            '90477': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '34',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ana L. Milanova'
            },
            '91036': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Tomasz Strzalkowski'
            },
            '91055': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-2300',
              sec: '03',
              rem: 40,
              title: 'Introduction To Algorithms',
              instructor: 'David Eric Goldschmidt, Xiaoyang Liu'
            },
            '91119': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'James A. Hendler'
            },
            '91146': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '22',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Elliot I. Anshelevich'
            },
            '91263': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 800, end: 950 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-2300',
              sec: '01',
              rem: 40,
              title: 'Introduction To Algorithms',
              instructor: 'David Eric Goldschmidt, Xiaoyang Liu'
            },
            '91283': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Christopher D. Carothers'
            },
            '91284': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Barbara Cutler'
            },
            '91285': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '01',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Sibel Adali'
            },
            '91286': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '02',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Charles V Stewart'
            },
            '91287': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '14',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Mark S Shephard'
            },
            '91349': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '22',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Christopher Bystroff'
            },
            '91443': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'W', { start: 800, end: 950 } ]
              ],
              id: 'CSCI-2500',
              sec: '01',
              rem: 36,
              title: 'Computer Organization',
              instructor: 'Masoud Zarifneshat, Shianne M. Hulbert'
            },
            '91478': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '05',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Kristin P Bennett'
            },
            '91480': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '06',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'James A. Hendler'
            },
            '91522': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '29',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Malik Magdon-Ismail'
            },
            '91533': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '10',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Kristin P Bennett'
            },
            '91793': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '08',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Bulent Yener'
            },
            '91827': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '11',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Barbara Cutler'
            },
            '91831': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '10',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Ana L. Milanova'
            },
            '91875': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'CSCI-4971',
              sec: '01',
              rem: 30,
              title: 'Ai And Blockchain',
              instructor: 'Oshani W. Seneviratne'
            },
            '91876': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '09',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Selmer Bringsjord'
            },
            '91877': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '12',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Mohammed J. Zaki'
            },
            '91878': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '13',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Deborah L. McGuinness'
            },
            '91890': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '13',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Deborah L. McGuinness'
            },
            '91892': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '15',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Christopher D. Carothers'
            },
            '91924': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '19',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Carlos A Varela'
            },
            '92227': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '21',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Jasmine A. Plum'
            },
            '92228': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '21',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Christopher Bystroff'
            },
            '92338': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'W', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1100',
              sec: '06',
              rem: 24,
              title: 'Computer Science I',
              instructor: 'John Sturman, Shianne M. Hulbert'
            },
            '92339': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '08',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Jidong Xiao, Shianne M. Hulbert, Neha Keshan'
            },
            '92340': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 800, end: 950 } ],
                [ 'W', { start: 1000, end: 1050 } ]
              ],
              id: 'CSCI-2200',
              sec: '01',
              rem: 40,
              title: 'Foundations Of Computer Sci',
              instructor: 'Radoslav Svetlozarov Ivanov'
            },
            '92478': {
              daysTimes: [ [ 'W', { start: 900, end: 1150 } ] ],
              id: 'CSCI-4400',
              sec: '01',
              rem: 10,
              title: 'Xinformatics',
              instructor: 'Thilanka Munasinghe'
            },
            '92479': {
              daysTimes: [ [ 'W', { start: 900, end: 1150 } ] ],
              id: 'CSCI-6400',
              sec: '01',
              rem: 10,
              title: 'Xinformatics',
              instructor: 'Thilanka Munasinghe'
            },
            '92487': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '09',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Neha Keshan, Shianne M. Hulbert, Jidong Xiao'
            },
            '92488': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-2300',
              sec: '05',
              rem: 40,
              title: 'Introduction To Algorithms',
              instructor: 'David Eric Goldschmidt, Xiaoyang Liu'
            },
            '92489': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-2300',
              sec: '06',
              rem: 40,
              title: 'Introduction To Algorithms',
              instructor: 'David Eric Goldschmidt, Xiaoyang Liu'
            },
            '92501': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '10',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Neha Keshan, Shianne M. Hulbert, Jidong Xiao'
            },
            '92521': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '26',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Stacy Elizabeth Patterson'
            },
            '92522': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '26',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Stacy Elizabeth Patterson'
            },
            '92523': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '27',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Lirong Xia'
            },
            '92524': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '27',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Lirong Xia'
            },
            '92527': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'CSCI-4150',
              sec: '01',
              rem: 175,
              title: 'Introduction To Artificial Intelligence',
              instructor: 'Lirong Xia'
            },
            '92597': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '01',
              rem: 10,
              title: "Master's Project",
              instructor: 'Deborah L. McGuinness'
            },
            '92652': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'CSCI-6971',
              sec: '01',
              rem: 20,
              title: 'Ai And Blockchain',
              instructor: 'Oshani W. Seneviratne'
            },
            '92653': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 800, end: 950 } ],
                [ 'W', { start: 1100, end: 1150 } ]
              ],
              id: 'CSCI-2200',
              sec: '02',
              rem: 40,
              title: 'Foundations Of Computer Sci',
              instructor: 'Radoslav Svetlozarov Ivanov'
            },
            '92654': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 800, end: 950 } ],
                [ 'W', { start: 1200, end: 1250 } ]
              ],
              id: 'CSCI-2200',
              sec: '03',
              rem: 40,
              title: 'Foundations Of Computer Sci',
              instructor: 'Radoslav Svetlozarov Ivanov'
            },
            '92655': {
              daysTimes: [
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'CSCI-2600',
              sec: '01',
              rem: 350,
              title: 'Principles Of Software',
              instructor: 'TBA'
            },
            '92656': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'CSCI-2500',
              sec: '02',
              rem: 36,
              title: 'Computer Organization',
              instructor: 'Masoud Zarifneshat, Shianne M. Hulbert'
            },
            '92658': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-2500',
              sec: '03',
              rem: 36,
              title: 'Computer Organization',
              instructor: 'Masoud Zarifneshat, Shianne M. Hulbert'
            },
            '92671': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '31',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Sergei Nirenburg'
            },
            '92702': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '17',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ron Sun'
            },
            '92709': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 800, end: 950 } ],
                [ 'W', { start: 1400, end: 1450 } ]
              ],
              id: 'CSCI-2200',
              sec: '05',
              rem: 40,
              title: 'Foundations Of Computer Sci',
              instructor: 'Radoslav Svetlozarov Ivanov'
            },
            '92979': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'CSCI-4320',
              sec: '01',
              rem: 90,
              title: 'Parallel Programming',
              instructor: 'Christopher D. Carothers'
            },
            '92980': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'CSCI-6360',
              sec: '01',
              rem: 30,
              title: 'Parallel Computing',
              instructor: 'Christopher D. Carothers'
            },
            '93010': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '02',
              rem: 10,
              title: "Master's Project",
              instructor: 'Malik Magdon-Ismail'
            },
            '93022': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '03',
              rem: 10,
              title: "Master's Project",
              instructor: 'James A. Hendler'
            },
            '93023': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '04',
              rem: 10,
              title: "Master's Project",
              instructor: 'Selmer Bringsjord'
            },
            '93026': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '05',
              rem: 10,
              title: "Master's Project",
              instructor: 'Elliot I. Anshelevich'
            },
            '93027': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '06',
              rem: 10,
              title: "Master's Project",
              instructor: 'Sergei Nirenburg'
            },
            '93032': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'W', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1100',
              sec: '07',
              rem: 24,
              title: 'Computer Science I',
              instructor: 'John Sturman, Shianne M. Hulbert'
            },
            '93033': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'W', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1100',
              sec: '08',
              rem: 24,
              title: 'Computer Science I',
              instructor: 'John Sturman, Shianne M. Hulbert'
            },
            '93046': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '07',
              rem: 10,
              title: "Master's Project",
              instructor: 'Lirong Xia'
            },
            '93056': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '08',
              rem: 10,
              title: "Master's Project",
              instructor: 'Konstantin Kuzmin'
            },
            '93063': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '09',
              rem: 10,
              title: "Master's Project",
              instructor: 'Bulent Yener'
            },
            '93067': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '10',
              rem: 10,
              title: "Master's Project",
              instructor: 'Sibel Adali'
            },
            '93075': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '11',
              rem: 10,
              title: "Master's Project",
              instructor: 'Boleslaw Szymanski'
            },
            '93081': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '12',
              rem: 10,
              title: "Master's Project",
              instructor: 'Stacy Elizabeth Patterson'
            },
            '93134': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '13',
              rem: 10,
              title: "Master's Project",
              instructor: 'Ana L. Milanova'
            },
            '93141': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '28',
              rem: 10,
              title: "Master's Project",
              instructor: 'W. Randolph Franklin'
            },
            '93203': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '11',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Neha Keshan, Shianne M. Hulbert, Jidong Xiao'
            },
            '93204': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '12',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Neha Keshan, Shianne M. Hulbert, Jidong Xiao'
            },
            '93205': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '13',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Neha Keshan, Shianne M. Hulbert, Jidong Xiao'
            },
            '93206': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '14',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Neha Keshan, Shianne M. Hulbert, Jidong Xiao'
            },
            '93207': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'W', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1100',
              sec: '09',
              rem: 24,
              title: 'Computer Science I',
              instructor: 'John Sturman, Shianne M. Hulbert'
            },
            '93208': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'W', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1100',
              sec: '10',
              rem: 24,
              title: 'Computer Science I',
              instructor: 'John Sturman, Shianne M. Hulbert'
            },
            '93234': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '11',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jianxi Gao'
            },
            '93236': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '14',
              rem: 10,
              title: "Master's Project",
              instructor: 'Mohammed J. Zaki'
            },
            '93277': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '07',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Jianxi Gao'
            },
            '93278': {
              daysTimes: [],
              id: 'CSCI-6990',
              sec: '23',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Mei Si'
            },
            '93413': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '15',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Neha Keshan, Shianne M. Hulbert, Jidong Xiao'
            },
            '93414': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-1200',
              sec: '16',
              rem: 25,
              title: 'Data Structures',
              instructor: 'Neha Keshan, Shianne M. Hulbert, Jidong Xiao'
            },
            '93415': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'CSCI-2500',
              sec: '04',
              rem: 36,
              title: 'Computer Organization',
              instructor: 'Masoud Zarifneshat, Shianne M. Hulbert'
            },
            '93416': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'W', { start: 1600, end: 1750 } ]
              ],
              id: 'CSCI-2500',
              sec: '05',
              rem: 36,
              title: 'Computer Organization',
              instructor: 'Masoud Zarifneshat, Shianne M. Hulbert'
            },
            '93431': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-4962',
              sec: '01',
              rem: 10,
              title: 'Security And Privacy Of Ml',
              instructor: 'Lei Yu'
            },
            '93432': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-6962',
              sec: '01',
              rem: 10,
              title: 'Security And Privacy Of Ml',
              instructor: 'Lei Yu'
            },
            '93496': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '15',
              rem: 10,
              title: "Master's Project",
              instructor: 'John Wen'
            },
            '93497': {
              daysTimes: [ [ 'W', { start: 1400, end: 1650 } ] ],
              id: 'CSCI-4964',
              sec: '01',
              rem: 20,
              title: 'Ml Open Source Open Science',
              instructor: 'Malik Magdon-Ismail, Thilanka Munasinghe'
            },
            '93499': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '16',
              rem: 10,
              title: "Master's Project",
              instructor: 'Jasmine A. Plum'
            },
            '93512': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '17',
              rem: 10,
              title: "Master's Project",
              instructor: 'Tomasz Strzalkowski'
            },
            '93523': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-2300',
              sec: '07',
              rem: 40,
              title: 'Introduction To Algorithms',
              instructor: 'David Eric Goldschmidt, Xiaoyang Liu'
            },
            '93524': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-2300',
              sec: '08',
              rem: 40,
              title: 'Introduction To Algorithms',
              instructor: 'David Eric Goldschmidt, Xiaoyang Liu'
            },
            '93541': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '18',
              rem: 10,
              title: "Master's Project",
              instructor: 'Christopher D. Carothers'
            },
            '93546': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '19',
              rem: 10,
              title: "Master's Project",
              instructor: 'Radoslav Svetlozarov Ivanov'
            },
            '93558': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '23',
              rem: 5,
              title: 'Dissertation',
              instructor: 'George M. Slota'
            },
            '93560': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '20',
              rem: 10,
              title: "Master's Project",
              instructor: 'Barbara Cutler'
            },
            '93606': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '21',
              rem: 10,
              title: "Master's Project",
              instructor: 'Kristin P Bennett'
            },
            '93623': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '22',
              rem: 10,
              title: "Master's Project",
              instructor: 'Mei Si'
            },
            '93671': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 800, end: 950 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'CSCI-2200',
              sec: '04',
              rem: 40,
              title: 'Foundations Of Computer Sci',
              instructor: 'Radoslav Svetlozarov Ivanov'
            },
            '93675': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'CSCI-4967',
              sec: '01',
              rem: 30,
              title: 'Projects In Ml And Ai',
              instructor: 'Uzma Mushtaque'
            },
            '93676': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'CSCI-6967',
              sec: '01',
              rem: 20,
              title: 'Projects In Ml And Ai',
              instructor: 'Uzma Mushtaque'
            },
            '93677': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-4968',
              sec: '01',
              rem: 30,
              title: 'Trustworthy Machine Learning',
              instructor: 'Alex Algernon Theodore Gittens'
            },
            '93678': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-6968',
              sec: '01',
              rem: 20,
              title: 'Trustworthy Machine Learning',
              instructor: 'Alex Algernon Theodore Gittens'
            },
            '93679': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'CSCI-4969',
              sec: '01',
              rem: 15,
              title: 'Robotics II',
              instructor: 'Kimberly Irene Oakes'
            },
            '93744': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '23',
              rem: 10,
              title: "Master's Project",
              instructor: 'Mark S Shephard'
            },
            '93747': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '24',
              rem: 10,
              title: "Master's Project",
              instructor: 'Jianxi Gao'
            },
            '93751': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '25',
              rem: 10,
              title: "Master's Project",
              instructor: 'Alex Algernon Theodore Gittens'
            },
            '93753': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '26',
              rem: 10,
              title: "Master's Project",
              instructor: 'George M. Slota'
            },
            '93786': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '27',
              rem: 10,
              title: "Master's Project",
              instructor: 'Wesley D Turner'
            },
            '93902': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'CSCI-4550',
              sec: '01',
              rem: 40,
              title: 'Interactive Visualization',
              instructor: 'Barbara Cutler'
            },
            '93903': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'CSCI-6550',
              sec: '01',
              rem: 20,
              title: 'Interactive Visualization',
              instructor: 'Barbara Cutler'
            },
            '93904': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'CSCI-6961',
              sec: '01',
              rem: 20,
              title: 'Deep Learning',
              instructor: 'Yao Ma'
            },
            '93924': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-2960',
              sec: '01',
              rem: 30,
              title: 'Mathematical Foundations Of Ml',
              instructor: 'Mohammad Mohammadi Amiri'
            },
            '93949': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-4960',
              sec: '01',
              rem: 29,
              title: 'Social Computing',
              instructor: 'Tomasz Strzalkowski'
            },
            '94261': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'CSCI-4965',
              sec: '01',
              rem: 30,
              title: 'Time Series Analysis',
              instructor: 'Bulent Yener'
            },
            '94262': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'CSCI-6965',
              sec: '01',
              rem: 10,
              title: 'Time Series Analysis',
              instructor: 'Bulent Yener'
            },
            '94295': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'CSCI-4600',
              sec: '01',
              rem: 5,
              title: 'Data Analytics',
              instructor: 'Thilanka Munasinghe'
            },
            '94299': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'CSCI-4600',
              sec: '02',
              rem: 5,
              title: 'Data Analytics',
              instructor: 'Thilanka Munasinghe'
            },
            '94351': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1600, end: 1750 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-2300',
              sec: '09',
              rem: 40,
              title: 'Introduction To Algorithms',
              instructor: 'David Eric Goldschmidt, Xiaoyang Liu'
            },
            '94352': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1600, end: 1750 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'CSCI-2300',
              sec: '10',
              rem: 40,
              title: 'Introduction To Algorithms',
              instructor: 'David Eric Goldschmidt, Xiaoyang Liu'
            },
            '94533': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'CSCI-4230',
              sec: '01',
              rem: 70,
              title: 'Cryptography And Network Security I',
              instructor: 'Bulent Yener'
            },
            '94535': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'CSCI-6230',
              sec: '01',
              rem: 30,
              title: 'Cryptography And Network Security I',
              instructor: 'Bulent Yener'
            },
            '94537': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'CSCI-4961',
              sec: '01',
              rem: 30,
              title: 'Deep Learning',
              instructor: 'Yao Ma'
            },
            '94630': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '29',
              rem: 10,
              title: "Master's Project",
              instructor: 'Charles V Stewart'
            },
            '94631': {
              daysTimes: [],
              id: 'CSCI-9990',
              sec: '30',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Oshani W. Seneviratne'
            },
            '94775': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'CSCI-6860',
              sec: '01',
              rem: 25,
              title: 'Finite Element Analysis',
              instructor: 'Fengyan Li'
            },
            '94776': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'CSCI-4820',
              sec: '01',
              rem: 50,
              title: 'Intro To Num Meth For Diff Eq',
              instructor: 'William Douglas Henshaw'
            },
            '94777': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 800, end: 950 } ],
                [ 'W', { start: 1500, end: 1550 } ]
              ],
              id: 'CSCI-2200',
              sec: '06',
              rem: 40,
              title: 'Foundations Of Computer Sci',
              instructor: 'Radoslav Svetlozarov Ivanov'
            },
            '94780': {
              daysTimes: [
                [ 'T', { start: 1600, end: 1750 } ],
                [ 'F', { start: 1600, end: 1750 } ]
              ],
              id: 'CSCI-1700',
              sec: '01',
              rem: 128,
              title: 'Early Introduction To Rcos',
              instructor: 'Wesley D Turner, Neha Keshan, Xiaoyang Liu, Jidong Xiao'
            },
            '94782': {
              daysTimes: [
                [ 'T', { start: 1600, end: 1750 } ],
                [ 'F', { start: 1600, end: 1750 } ]
              ],
              id: 'CSCI-2700',
              sec: '01',
              rem: 128,
              title: 'Introduction To Rcos',
              instructor: 'Wesley D Turner, Neha Keshan, Xiaoyang Liu, Jidong Xiao'
            },
            '94784': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'CSCI-4270',
              sec: '01',
              rem: 70,
              title: 'Computational Vision',
              instructor: 'Charles V Stewart'
            },
            '94786': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'CSCI-6270',
              sec: '01',
              rem: 30,
              title: 'Computational Vision',
              instructor: 'Charles V Stewart'
            },
            '94791': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-4450',
              sec: '01',
              rem: 40,
              title: 'Principles Of Program Analysis',
              instructor: 'Ana L. Milanova'
            },
            '94792': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-6450',
              sec: '01',
              rem: 20,
              title: 'Principles Of Program Analysis',
              instructor: 'Ana L. Milanova'
            },
            '94793': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-4510',
              sec: '01',
              rem: 40,
              title: 'Dist Systems & Algorithms',
              instructor: 'Stacy Elizabeth Patterson'
            },
            '94794': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-6510',
              sec: '01',
              rem: 20,
              title: 'Distributed Algorithms And Systems',
              instructor: 'Stacy Elizabeth Patterson'
            },
            '94795': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-4963',
              sec: '01',
              rem: 30,
              title: 'Graph Mining',
              instructor: 'George M. Slota'
            },
            '94796': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-6963',
              sec: '01',
              rem: 20,
              title: 'Graph Mining',
              instructor: 'George M. Slota'
            },
            '94797': {
              daysTimes: [
                [ 'T', { start: 1600, end: 1750 } ],
                [ 'F', { start: 1600, end: 1750 } ]
              ],
              id: 'CSCI-4970',
              sec: '01',
              rem: 16,
              title: 'Rcos',
              instructor: 'Wesley D Turner'
            },
            '94798': {
              daysTimes: [
                [ 'T', { start: 1600, end: 1750 } ],
                [ 'F', { start: 1600, end: 1750 } ]
              ],
              id: 'CSCI-4970',
              sec: '02',
              rem: 16,
              title: 'Rcos',
              instructor: 'Wesley D Turner'
            },
            '94799': {
              daysTimes: [
                [ 'T', { start: 1600, end: 1750 } ],
                [ 'F', { start: 1600, end: 1750 } ]
              ],
              id: 'CSCI-4970',
              sec: '03',
              rem: 128,
              title: 'Rcos',
              instructor: 'Wesley D Turner'
            },
            '94800': {
              daysTimes: [
                [ 'T', { start: 1600, end: 1750 } ],
                [ 'F', { start: 1600, end: 1750 } ]
              ],
              id: 'CSCI-4970',
              sec: '04',
              rem: 256,
              title: 'Rcos',
              instructor: 'Wesley D Turner'
            },
            '94806': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'CSCI-6960',
              sec: '01',
              rem: 20,
              title: 'Ai For Drug Discovery',
              instructor: 'TBA'
            },
            '94815': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'CSCI-4520',
              sec: '01',
              rem: 15,
              title: 'Web Science Systems Develpment',
              instructor: 'Brian Robert Callahan'
            },
            '94881': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'CSCI-4260',
              sec: '01',
              rem: 40,
              title: 'Graph Theory',
              instructor: 'George M. Slota'
            },
            '94939': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'CSCI-6969',
              sec: '01',
              rem: 15,
              title: 'Robotics II',
              instructor: 'Kimberly Irene Oakes'
            },
            '94973': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'CSCI-4520',
              sec: '02',
              rem: 15,
              title: 'Web Science Systems Develpment',
              instructor: 'Brian Robert Callahan'
            },
            '94977': {
              daysTimes: [],
              id: 'CSCI-6980',
              sec: '30',
              rem: 10,
              title: "Master's Project",
              instructor: 'Oshani W. Seneviratne'
            },
            '94978': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'CSCI-6966',
              sec: '01',
              rem: 30,
              title: 'Network Flows',
              instructor: 'James Bailey'
            }
          },
          ENGR: {
            '90045': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'ENGR-2600',
              sec: '03',
              rem: 60,
              title: 'Mod & Analysis Uncertainty',
              instructor: 'Natalia Maldonado Martinez, Xun Wang'
            },
            '90046': {
              daysTimes: [
                [ 'T', { start: 830, end: 950 } ],
                [ 'F', { start: 830, end: 950 } ]
              ],
              id: 'ENGR-2710',
              sec: '01',
              rem: 20,
              title: 'Gen Manufacturing Proc',
              instructor: 'Samuel G Chiappone'
            },
            '90047': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1600, end: 1750 } ]
              ],
              id: 'ENGR-2530',
              sec: '02',
              rem: 65,
              title: 'Strength Of Materials',
              instructor: 'Omar Osama El-Shafee'
            },
            '90048': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1600, end: 1750 } ]
              ],
              id: 'ENGR-2530',
              sec: '03',
              rem: 65,
              title: 'Strength Of Materials',
              instructor: 'Dana M Chichester'
            },
            '90049': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'ENGR-2600',
              sec: '01',
              rem: 70,
              title: 'Mod & Analysis Uncertainty',
              instructor: 'Rostyslav Korolov, Xun Wang'
            },
            '90050': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'ENGR-1600',
              sec: '03',
              rem: 45,
              title: 'Materials Science',
              instructor: 'Ravishankar Sundararaman, John R. LaGraff, Chaitanya Kishore Ullal'
            },
            '90051': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 800, end: 950 } ]
              ],
              id: 'ENGR-1100',
              sec: '01',
              rem: 70,
              title: 'Intro To Engr Analysis',
              instructor: 'Keith Robert Taylor'
            },
            '90052': {
              daysTimes: [ [ 'T', { start: 1400, end: 1550 } ] ],
              id: 'ENGR-1200',
              sec: '02',
              rem: 45,
              title: 'Eng Graphics & Cad',
              instructor: 'Jeffrey Phillip Morris'
            },
            '90053': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'ENGR-1200',
              sec: '03',
              rem: 25,
              title: 'Eng Graphics & Cad',
              instructor: 'Jeffrey Phillip Morris'
            },
            '90054': {
              daysTimes: [ [ 'W', { start: 1400, end: 1550 } ] ],
              id: 'ENGR-1200',
              sec: '05',
              rem: 45,
              title: 'Eng Graphics & Cad',
              instructor: 'Jeffrey Phillip Morris'
            },
            '90055': {
              daysTimes: [ [ 'W', { start: 1600, end: 1750 } ] ],
              id: 'ENGR-1200',
              sec: '06',
              rem: 45,
              title: 'Eng Graphics & Cad',
              instructor: 'Jeffrey Phillip Morris'
            },
            '90056': {
              daysTimes: [ [ 'M', { start: 1400, end: 1650 } ] ],
              id: 'ENGR-1300',
              sec: '02',
              rem: 25,
              title: 'Engr Processes',
              instructor: 'John P Szczesniak'
            },
            '90057': {
              daysTimes: [ [ 'T', { start: 1300, end: 1550 } ] ],
              id: 'ENGR-1300',
              sec: '04',
              rem: 25,
              title: 'Engr Processes',
              instructor: 'John P Szczesniak'
            },
            '90058': {
              daysTimes: [ [ 'W', { start: 1000, end: 1250 } ] ],
              id: 'ENGR-1300',
              sec: '05',
              rem: 25,
              title: 'Engr Processes',
              instructor: 'John P Szczesniak'
            },
            '90059': {
              daysTimes: [ [ 'R', { start: 900, end: 1150 } ] ],
              id: 'ENGR-1300',
              sec: '07',
              rem: 25,
              title: 'Engr Processes',
              instructor: 'John P Szczesniak'
            },
            '90062': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'ENGR-2600',
              sec: '04',
              rem: 60,
              title: 'Mod & Analysis Uncertainty',
              instructor: 'Xun Wang'
            },
            '90076': {
              daysTimes: [ [ 'R', { start: 1400, end: 1650 } ] ],
              id: 'ENGR-1300',
              sec: '08',
              rem: 25,
              title: 'Engr Processes',
              instructor: 'John P Szczesniak'
            },
            '90077': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'ENGR-1600',
              sec: '01',
              rem: 45,
              title: 'Materials Science',
              instructor: 'John R. LaGraff, Chaitanya Kishore Ullal'
            },
            '90082': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'ENGR-2600',
              sec: '02',
              rem: 60,
              title: 'Mod & Analysis Uncertainty',
              instructor: 'Esra Agca Aktunc, Xun Wang'
            },
            '90083': {
              daysTimes: [ [ 'W', { start: 1400, end: 1650 } ] ],
              id: 'ENGR-1300',
              sec: '06',
              rem: 25,
              title: 'Engr Processes',
              instructor: 'John P Szczesniak'
            },
            '90084': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'ENGR-1600',
              sec: '02',
              rem: 45,
              title: 'Materials Science',
              instructor: 'John R. LaGraff, Chaitanya Kishore Ullal'
            },
            '90090': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'ENGR-1200',
              sec: '04',
              rem: 25,
              title: 'Eng Graphics & Cad',
              instructor: 'Jeffrey Phillip Morris'
            },
            '90093': {
              daysTimes: [ [ 'T', { start: 900, end: 1150 } ] ],
              id: 'ENGR-1300',
              sec: '03',
              rem: 25,
              title: 'Engr Processes',
              instructor: 'John P Szczesniak'
            },
            '90096': {
              daysTimes: [ [ 'M', { start: 900, end: 1150 } ] ],
              id: 'ENGR-1300',
              sec: '01',
              rem: 25,
              title: 'Engr Processes',
              instructor: 'John P Szczesniak'
            },
            '90106': {
              daysTimes: [ [ 'W', { start: 1000, end: 1120 } ] ],
              id: 'ENGR-1010',
              sec: '01',
              rem: 30,
              title: 'Prof Develop: Group Dynamics',
              instructor: 'Shatoya Denise Michel, Tracy N. Sullivan'
            },
            '90107': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'ENGR-2050',
              sec: '04',
              rem: 25,
              title: 'Intro Engineering Design',
              instructor: 'Clinton T. Ballinger, Mark J Anderson, Amy Corron Youmans'
            },
            '90108': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ENGR-2050',
              sec: '05',
              rem: 25,
              title: 'Intro Engineering Design',
              instructor: 'Clinton T. Ballinger, Mark J Anderson, Jordan L Vener'
            },
            '90109': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ENGR-2050',
              sec: '06',
              rem: 25,
              title: 'Intro Engineering Design',
              instructor: 'Daniel Chapman Lander, Judith A. Obiero'
            },
            '90110': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ENGR-2050',
              sec: '07',
              rem: 25,
              title: 'Intro Engineering Design',
              instructor: 'Daniel Chapman Lander, Glen R Gross'
            },
            '90111': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ENGR-2050',
              sec: '09',
              rem: 25,
              title: 'Intro Engineering Design',
              instructor: 'George Jiren Lee, Daniel Chapman Lander, Judith A. Obiero'
            },
            '90112': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'ENGR-2090',
              sec: '01',
              rem: 50,
              title: 'Engineering Dynamics',
              instructor: 'John A Tichy'
            },
            '90113': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ENGR-2090',
              sec: '02',
              rem: 65,
              title: 'Engineering Dynamics',
              instructor: 'John A Tichy'
            },
            '90127': {
              daysTimes: [ [ 'M', { start: 1400, end: 1550 } ] ],
              id: 'ENGR-1200',
              sec: '01',
              rem: 45,
              title: 'Eng Graphics & Cad',
              instructor: 'Jeffrey Phillip Morris'
            },
            '90233': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'ENGR-2050',
              sec: '08',
              rem: 25,
              title: 'Intro Engineering Design',
              instructor: 'Daniel Chapman Lander, Glen R Gross'
            },
            '90239': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'ENGR-2350',
              sec: '01',
              rem: 60,
              title: 'Embedded Control',
              instructor: 'Kyle Richard Wilt, Russell P. Kraft'
            },
            '90240': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'ENGR-2350',
              sec: '02',
              rem: 60,
              title: 'Embedded Control',
              instructor: 'Kyle Richard Wilt, Russell P. Kraft'
            },
            '90241': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'ENGR-2350',
              sec: '03',
              rem: 60,
              title: 'Embedded Control',
              instructor: 'Russell P. Kraft, Kyle Richard Wilt'
            },
            '90277': {
              daysTimes: [ [ 'T', { start: 1000, end: 1150 } ] ],
              id: 'ENGR-4010',
              sec: '01',
              rem: 45,
              title: 'Pd: Leadership Competencies',
              instructor: 'Judith A. Obiero'
            },
            '90278': {
              daysTimes: [ [ 'T', { start: 1400, end: 1550 } ] ],
              id: 'ENGR-4010',
              sec: '02',
              rem: 45,
              title: 'Pd: Leadership Competencies',
              instructor: 'Amy Corron Youmans'
            },
            '90279': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'ENGR-4010',
              sec: '03',
              rem: 45,
              title: 'Pd: Leadership Competencies',
              instructor: 'Amy Corron Youmans'
            },
            '90298': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ENGR-2050',
              sec: '03',
              rem: 25,
              title: 'Intro Engineering Design',
              instructor: 'Prabhat Hajela, Christine M Allard, Mark J Anderson'
            },
            '90435': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'ENGR-4010',
              sec: '05',
              rem: 45,
              title: 'Pd: Leadership Competencies',
              instructor: 'Amy Corron Youmans'
            },
            '90436': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ENGR-2050',
              sec: '01',
              rem: 25,
              title: 'Intro Engineering Design',
              instructor: 'Salih Muhsin Celik, Shatoya Denise Michel, Jordan L Vener'
            },
            '90464': {
              daysTimes: [],
              id: 'ENGR-2940',
              sec: '00',
              rem: 0,
              title: 'Readings In Engr',
              instructor: ''
            },
            '90465': {
              daysTimes: [],
              id: 'ENGR-4940',
              sec: '00',
              rem: 0,
              title: 'Readings In Engr',
              instructor: ''
            },
            '90508': {
              daysTimes: [ [ 'R', { start: 1200, end: 1350 } ] ],
              id: 'ENGR-4010',
              sec: '07',
              rem: 45,
              title: 'Pd: Leadership Competencies',
              instructor: 'Shatoya Denise Michel'
            },
            '90509': {
              daysTimes: [ [ 'R', { start: 1400, end: 1550 } ] ],
              id: 'ENGR-4010',
              sec: '08',
              rem: 45,
              title: 'Pd: Leadership Competencies',
              instructor: 'Susan Victoria Henry'
            },
            '90516': {
              daysTimes: [ [ 'W', { start: 1100, end: 1350 } ] ],
              id: 'ENGR-4100',
              sec: '01',
              rem: 15,
              title: 'Business Issues For Engr & Sci',
              instructor: 'Kevin R. Stewart'
            },
            '90517': {
              daysTimes: [ [ 'W', { start: 1100, end: 1350 } ] ],
              id: 'ENGR-6100',
              sec: '01',
              rem: 5,
              title: 'Business Issues For Engr & Sci',
              instructor: 'Kevin R. Stewart'
            },
            '91048': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'ENGR-4010',
              sec: '04',
              rem: 30,
              title: 'Pd: Leadership Competencies',
              instructor: 'Glen R Gross'
            },
            '91262': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ]
              ],
              id: 'ENGR-4760',
              sec: '01',
              rem: 55,
              title: 'Engineering Economics',
              instructor: 'John M. Reilly'
            },
            '91445': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'ENGR-4010',
              sec: '06',
              rem: 45,
              title: 'Pd: Leadership Competencies',
              instructor: 'Susan Victoria Henry'
            },
            '92324': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ],
                [ 'W', { start: 800, end: 950 } ]
              ],
              id: 'ENGR-1100',
              sec: '03',
              rem: 70,
              title: 'Intro To Engr Analysis',
              instructor: 'Shun Uchida, Keith Robert Taylor'
            },
            '92325': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'ENGR-1600',
              sec: '04',
              rem: 45,
              title: 'Materials Science',
              instructor: 'Wei Bao, John R. LaGraff, Chaitanya Kishore Ullal'
            },
            '92326': {
              daysTimes: [ [ 'T', { start: 800, end: 950 } ] ],
              id: 'ENGR-1400',
              sec: '01',
              rem: 45,
              title: 'Engineering Communications',
              instructor: 'Jeffrey Phillip Morris'
            },
            '92327': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'ENGR-1400',
              sec: '02',
              rem: 45,
              title: 'Engineering Communications',
              instructor: 'Jeffrey Phillip Morris'
            },
            '92328': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'ENGR-1400',
              sec: '03',
              rem: 45,
              title: 'Engineering Communications',
              instructor: 'Jeffrey Phillip Morris'
            },
            '92329': {
              daysTimes: [ [ 'W', { start: 1400, end: 1550 } ] ],
              id: 'ENGR-1400',
              sec: '04',
              rem: 45,
              title: 'Engineering Communications',
              instructor: 'Jeffrey Phillip Morris'
            },
            '92330': {
              daysTimes: [ [ 'R', { start: 800, end: 950 } ] ],
              id: 'ENGR-1400',
              sec: '05',
              rem: 45,
              title: 'Engineering Communications',
              instructor: 'Jeffrey Phillip Morris'
            },
            '92359': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'ENGR-2300',
              sec: '01',
              rem: 60,
              title: 'Electronic Instrumentation',
              instructor: 'Alex Patterson, Sang In Han'
            },
            '92360': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'ENGR-2300',
              sec: '02',
              rem: 60,
              title: 'Electronic Instrumentation',
              instructor: 'Sang In Han, Alex Patterson'
            },
            '92484': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ENGR-2090',
              sec: '04',
              rem: 60,
              title: 'Engineering Dynamics',
              instructor: 'Leonid Pogorelyuk'
            },
            '92485': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ENGR-2250',
              sec: '01',
              rem: 20,
              title: 'Thermal & Fluids Eng I',
              instructor: 'Vidhya Chakrapani'
            },
            '92486': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'ENGR-2600',
              sec: '05',
              rem: 45,
              title: 'Mod & Analysis Uncertainty',
              instructor: 'Xun Wang'
            },
            '92627': {
              daysTimes: [ [ 'T', { start: 1600, end: 1850 } ] ],
              id: 'ENGR-1300',
              sec: '11',
              rem: 25,
              title: 'Engr Processes',
              instructor: 'Scott Frederick Yerbury, John P Szczesniak'
            },
            '92628': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ENGR-2050',
              sec: '02',
              rem: 25,
              title: 'Intro Engineering Design',
              instructor: 'Hunter Christophe Belanger, Mark J Anderson, Jordan L Vener'
            },
            '92629': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'ENGR-2600',
              sec: '06',
              rem: 40,
              title: 'Mod & Analysis Uncertainty',
              instructor: 'Natalia Maldonado Martinez, Xun Wang'
            },
            '92988': {
              daysTimes: [ [ 'R', { start: 1730, end: 2020 } ] ],
              id: 'ENGR-1300',
              sec: '12',
              rem: 25,
              title: 'Engr Processes',
              instructor: 'John P Szczesniak'
            },
            '92990': {
              daysTimes: [ [ 'T', { start: 1400, end: 1550 } ] ],
              id: 'ENGR-4010',
              sec: '10',
              rem: 30,
              title: 'Pd: Leadership Competencies',
              instructor: 'Susan Victoria Henry'
            },
            '93149': {
              daysTimes: [ [ 'M', { start: 1730, end: 2020 } ] ],
              id: 'ENGR-1300',
              sec: '13',
              rem: 25,
              title: 'Engr Processes',
              instructor: 'John P Szczesniak'
            },
            '93150': {
              daysTimes: [ [ 'T', { start: 800, end: 950 } ] ],
              id: 'ENGR-1200',
              sec: '09',
              rem: 25,
              title: 'Eng Graphics & Cad',
              instructor: 'Jeffrey Phillip Morris'
            },
            '93151': {
              daysTimes: [ [ 'W', { start: 800, end: 950 } ] ],
              id: 'ENGR-1400',
              sec: '06',
              rem: 45,
              title: 'Engineering Communications',
              instructor: 'Jeffrey Phillip Morris'
            },
            '93152': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'W', { start: 1100, end: 1250 } ]
              ],
              id: 'ENGR-4720',
              sec: '01',
              rem: 12,
              title: 'Manufacturing Processes And Systems Laboratory II',
              instructor: 'Samuel G Chiappone, Larry David Oligny'
            },
            '93153': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1100, end: 1250 } ]
              ],
              id: 'ENGR-4720',
              sec: '02',
              rem: 12,
              title: 'Manufacturing Processes And Systems Laboratory II',
              instructor: 'Samuel G Chiappone, Larry David Oligny'
            },
            '93210': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'ENGR-2700',
              sec: '01',
              rem: 15,
              title: 'Intro Manufacturing Planning',
              instructor: 'Diego Alejandro Moran Ramirez'
            },
            '93384': {
              daysTimes: [ [ 'W', { start: 800, end: 920 } ] ],
              id: 'ENGR-1010',
              sec: '02',
              rem: 30,
              title: 'Prof Develop: Group Dynamics',
              instructor: 'Shatoya Denise Michel, Tracy N. Sullivan'
            },
            '93637': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ],
                [ 'W', { start: 1600, end: 1750 } ]
              ],
              id: 'ENGR-2530',
              sec: '01',
              rem: 50,
              title: 'Strength Of Materials',
              instructor: 'Omar Osama El-Shafee'
            },
            '93935': {
              daysTimes: [],
              id: 'ENGR-6100',
              sec: 'H01',
              rem: 25,
              title: 'Business Issues For Engr & Sci',
              instructor: 'Thomas M. Abbott'
            },
            '93936': {
              daysTimes: [],
              id: 'ENGR-6200',
              sec: 'H01',
              rem: 25,
              title: 'Data-driven Decision Making',
              instructor: 'John Franklin'
            },
            '93937': {
              daysTimes: [],
              id: 'ENGR-6205',
              sec: 'H01',
              rem: 25,
              title: 'Production & Logistic Analysis',
              instructor: 'TBA'
            },
            '93938': {
              daysTimes: [],
              id: 'ENGR-6206',
              sec: 'H01',
              rem: 25,
              title: 'Modeling Production Decisions',
              instructor: 'Rushabh S. Padalia'
            },
            '93939': {
              daysTimes: [],
              id: 'ENGR-6215',
              sec: 'H01',
              rem: 25,
              title: 'Business Intelligence Analysis',
              instructor: 'Christopher Shiu-Pui Tong'
            },
            '93940': {
              daysTimes: [],
              id: 'ENGR-6216',
              sec: 'H01',
              rem: 25,
              title: 'Modeling Business Decisions',
              instructor: 'Rushabh S. Padalia'
            },
            '93941': {
              daysTimes: [],
              id: 'ENGR-6220',
              sec: 'H01',
              rem: 25,
              title: 'Data Architecture',
              instructor: 'Jan P. Olausson'
            },
            '93942': {
              daysTimes: [],
              id: 'ENGR-6230',
              sec: 'H01',
              rem: 25,
              title: 'Lean Six Sigma I',
              instructor: 'Antonella Zompa'
            },
            '94248': {
              daysTimes: [],
              id: 'ENGR-6221',
              sec: 'H01',
              rem: 25,
              title: 'Machine Learning Frameworks',
              instructor: 'Rushabh S. Padalia'
            },
            '94249': {
              daysTimes: [],
              id: 'ENGR-6222',
              sec: 'H01',
              rem: 25,
              title: 'Deep Learning In Ai Systems',
              instructor: 'Jan P. Olausson'
            },
            '94250': {
              daysTimes: [],
              id: 'ENGR-6970',
              sec: 'H01',
              rem: 25,
              title: 'Masters Professional Project',
              instructor: 'Michael David Hughes'
            },
            '94622': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'W', { start: 800, end: 950 } ]
              ],
              id: 'ENGR-1100',
              sec: '02',
              rem: 70,
              title: 'Intro To Engr Analysis',
              instructor: 'Keith Robert Taylor'
            },
            '94637': {
              daysTimes: [ [ 'F', { start: 1200, end: 1450 } ] ],
              id: 'ENGR-1300',
              sec: '10',
              rem: 25,
              title: 'Engr Processes',
              instructor: 'John P Szczesniak'
            },
            '94638': {
              daysTimes: [ [ 'F', { start: 900, end: 1150 } ] ],
              id: 'ENGR-1300',
              sec: '09',
              rem: 25,
              title: 'Engr Processes',
              instructor: 'John P Szczesniak'
            },
            '94721': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ENGR-4555',
              sec: '01',
              rem: 15,
              title: 'Ethical Engineering & Tech',
              instructor: 'Azita Hirsa'
            },
            '94725': {
              daysTimes: [ [ 'F', { start: 1000, end: 1150 } ] ],
              id: 'ENGR-4010',
              sec: '09',
              rem: 45,
              title: 'Pd: Leadership Competencies',
              instructor: 'Shatoya Denise Michel'
            },
            '94730': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'ENGR-4961',
              sec: '01',
              rem: 100,
              title: 'Fab Tech f Semiconductor Mfg',
              instructor: 'Jianqiang Lu'
            },
            '94731': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'ENGR-6961',
              sec: '01',
              rem: 100,
              title: 'Fab Tech f Semiconductor Mfg',
              instructor: 'Jianqiang Lu'
            },
            '94808': {
              daysTimes: [
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'ENGR-6963',
              sec: '01',
              rem: 10,
              title: 'Platform Bus. For Eng. & Sci.',
              instructor: 'Kevin R. Stewart'
            }
          },
          ERTH: {
            '90079': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ERTH-1200',
              sec: '01',
              rem: 100,
              title: "Geology II Earth's Surface",
              instructor: 'Sarah Beth Cadieux'
            },
            '90249': {
              daysTimes: [],
              id: 'ERTH-6990',
              sec: '01',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Frank Spear'
            },
            '90466': {
              daysTimes: [],
              id: 'ERTH-6940',
              sec: '00',
              rem: 0,
              title: 'Readings In Erth',
              instructor: ''
            },
            '90534': {
              daysTimes: [],
              id: 'ERTH-4940',
              sec: '00',
              rem: 0,
              title: 'Readings In Erth',
              instructor: ''
            },
            '91852': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ERTH-4500',
              sec: '01',
              rem: 20,
              title: "Earth's Climate:past, Present And Future",
              instructor: 'Sarah Beth Cadieux'
            },
            '91921': {
              daysTimes: [],
              id: 'ERTH-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Frank Spear'
            },
            '92476': {
              daysTimes: [ [ 'W', { start: 900, end: 1150 } ] ],
              id: 'ERTH-4400',
              sec: '01',
              rem: 1,
              title: 'Xinformatics',
              instructor: 'Thilanka Munasinghe'
            },
            '92477': {
              daysTimes: [ [ 'W', { start: 900, end: 1150 } ] ],
              id: 'ERTH-6400',
              sec: '01',
              rem: 1,
              title: 'Xinformatics',
              instructor: 'Thilanka Munasinghe'
            },
            '92481': {
              daysTimes: [],
              id: 'ERTH-6980',
              sec: '01',
              rem: 10,
              title: "Master's Project",
              instructor: 'Karyn Lynne Rogers'
            },
            '92482': {
              daysTimes: [],
              id: 'ERTH-6990',
              sec: '03',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Karyn Lynne Rogers'
            },
            '92483': {
              daysTimes: [],
              id: 'ERTH-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Karyn Lynne Rogers'
            },
            '92983': {
              daysTimes: [],
              id: 'ERTH-6980',
              sec: '02',
              rem: 10,
              title: "Master's Project",
              instructor: 'Morgan Frederick Schaller'
            },
            '92984': {
              daysTimes: [],
              id: 'ERTH-6990',
              sec: '04',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Morgan Frederick Schaller'
            },
            '92985': {
              daysTimes: [],
              id: 'ERTH-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Morgan Frederick Schaller'
            },
            '92991': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'ERTH-1250',
              sec: '02',
              rem: 24,
              title: 'Geology II: Lab',
              instructor: 'Sarah Beth Cadieux'
            },
            '93433': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'ERTH-1250',
              sec: '01',
              rem: 24,
              title: 'Geology II: Lab',
              instructor: 'Sarah Beth Cadieux'
            },
            '93437': {
              daysTimes: [ [ 'W', { start: 1400, end: 1550 } ] ],
              id: 'ERTH-1250',
              sec: '03',
              rem: 24,
              title: 'Geology II: Lab',
              instructor: 'Sarah Beth Cadieux'
            },
            '93646': {
              daysTimes: [ [ 'W', { start: 1600, end: 1750 } ] ],
              id: 'ERTH-1250',
              sec: '04',
              rem: 24,
              title: 'Geology II: Lab',
              instructor: 'Sarah Beth Cadieux'
            },
            '93648': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ERTH-2100',
              sec: '01',
              rem: 15,
              title: 'Intro Geophysics',
              instructor: 'TBA'
            },
            '93957': {
              daysTimes: [ [ 'W', { start: 800, end: 950 } ] ],
              id: 'ERTH-1250',
              sec: '05',
              rem: 24,
              title: 'Geology II: Lab',
              instructor: 'Sarah Beth Cadieux'
            },
            '93961': {
              daysTimes: [],
              id: 'ERTH-6990',
              sec: '02',
              rem: 5,
              title: "Master's Thesis",
              instructor: 'Sasha Joy Wagner'
            },
            '93962': {
              daysTimes: [],
              id: 'ERTH-9990',
              sec: '03',
              rem: 5,
              title: 'Dissertation',
              instructor: 'Sasha Joy Wagner'
            },
            '94245': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ERTH-4810',
              sec: '01',
              rem: 20,
              title: 'Chem Of The Environment',
              instructor: 'Simon Nicholas Platts'
            },
            '94471': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ERTH-1510',
              sec: '01',
              rem: 25,
              title: 'Intro To Astrobiology',
              instructor: 'Andrew Steele, Karyn Lynne Rogers'
            },
            '94588': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ERTH-1200',
              sec: '02',
              rem: 20,
              title: "Geology II Earth's Surface",
              instructor: 'Sarah Beth Cadieux'
            },
            '94756': {
              daysTimes: [ [ 'M', { start: 1000, end: 1250 } ] ],
              id: 'ERTH-6230',
              sec: '01',
              rem: 15,
              title: 'Biogeochem Impact Extreme Evnt',
              instructor: 'Sasha Joy Wagner'
            },
            '94757': {
              daysTimes: [ [ 'W', { start: 1200, end: 1500 } ] ],
              id: 'ERTH-6240',
              sec: '01',
              rem: 15,
              title: 'Evolution Of Earths Atmosphere',
              instructor: 'Morgan Frederick Schaller'
            },
            '94767': {
              daysTimes: [],
              id: 'ERTH-6960',
              sec: '00',
              rem: 0,
              title: 'Special Topics In Geology',
              instructor: ''
            },
            '94839': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'ERTH-4965',
              sec: '01',
              rem: 20,
              title: 'Hydrothermal Expmt Methods',
              instructor: 'Kristin Nicole Johnson'
            },
            '94840': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'ERTH-6965',
              sec: '01',
              rem: 20,
              title: 'Hydrothermal Expmt Methods',
              instructor: 'Kristin Nicole Johnson'
            }
          },
          ECON: {
            '90038': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'ECON-2010',
              sec: '01',
              rem: 100,
              title: 'Intermediate Microeconomic Theory',
              instructor: 'Robert W. Jones'
            },
            '90065': {
              daysTimes: [
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'ECON-2010',
              sec: '02',
              rem: 100,
              title: 'Intermediate Microeconomic Theory',
              instructor: 'Robert W. Jones'
            },
            '90074': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-4130',
              sec: '01',
              rem: 180,
              title: 'Money & Banking',
              instructor: 'Sarah Marsden Greene'
            },
            '90461': {
              daysTimes: [],
              id: 'ECON-4940',
              sec: '00',
              rem: 0,
              title: 'Readings In Economics',
              instructor: ''
            },
            '90533': {
              daysTimes: [],
              id: 'ECON-2940',
              sec: '00',
              rem: 0,
              title: 'Readings In Economics',
              instructor: ''
            },
            '92037': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-2020',
              sec: '01',
              rem: 36,
              title: 'Intermediate Macroeconomic Theory',
              instructor: 'Mina Mahmoudi'
            },
            '92646': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ECON-2020',
              sec: '02',
              rem: 59,
              title: 'Intermediate Macroeconomic Theory',
              instructor: 'Huaming Peng'
            },
            '93409': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-4310',
              sec: '01',
              rem: 19,
              title: 'Law & Economics',
              instructor: 'Robert W. Jones'
            },
            '93536': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-4570',
              sec: '02',
              rem: 25,
              title: 'Econometrics',
              instructor: 'Huaming Peng'
            },
            '93630': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'ECON-6190',
              sec: '01',
              rem: 5,
              title: 'Adv Intl Econ & Globalization',
              instructor: 'Mina Mahmoudi'
            },
            '93631': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'ECON-4190',
              sec: '01',
              rem: 19,
              title: 'Intl Economics & Globalization',
              instructor: 'Mina Mahmoudi'
            },
            '93642': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-6170',
              sec: '01',
              rem: 5,
              title: 'Health Economics And Policy',
              instructor: 'Jason Ung Huh'
            },
            '93643': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-4170',
              sec: '01',
              rem: 14,
              title: 'Health Economics And Policy',
              instructor: 'Jason Ung Huh'
            },
            '93859': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ECON-2020',
              sec: '03',
              rem: 55,
              title: 'Intermediate Macroeconomic Theory',
              instructor: 'Mina Mahmoudi'
            },
            '93860': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'ECON-4270',
              sec: '01',
              rem: 14,
              title: 'Behavioral Economics',
              instructor: 'Ian S. Chadd'
            },
            '93861': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'ECON-6270',
              sec: '01',
              rem: 5,
              title: 'Behavioral Economics',
              instructor: 'Ian S. Chadd'
            },
            '93884': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ECON-6130',
              sec: '01',
              rem: 10,
              title: 'Econ Of Growth & Innovation',
              instructor: 'Michael A. Klein'
            },
            '93885': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ECON-4360',
              sec: '01',
              rem: 19,
              title: 'Experimental Economics',
              instructor: 'Billur Aksoy'
            },
            '93905': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ECON-6360',
              sec: '01',
              rem: 10,
              title: 'Experimental Economics',
              instructor: 'Billur Aksoy'
            },
            '93907': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-4320',
              sec: '01',
              rem: 19,
              title: 'Econ Models Of Decision Making',
              instructor: 'Robeny Bruno Nkuiya Mbakop'
            },
            '93908': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-4340',
              sec: '01',
              rem: 19,
              title: 'Behavioral Financial Econ',
              instructor: 'Billur Aksoy'
            },
            '93909': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-6340',
              sec: '01',
              rem: 10,
              title: 'Behavioral Financial Econ',
              instructor: 'Billur Aksoy'
            },
            '94155': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-6040',
              sec: '01',
              rem: 10,
              title: 'Adv Data Analy & Policy Eval',
              instructor: 'Rui Fan'
            },
            '94156': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-6320',
              sec: '01',
              rem: 5,
              title: 'Econ Models Of Decision Making',
              instructor: 'Robeny Bruno Nkuiya Mbakop'
            },
            '94157': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ECON-4110',
              sec: '01',
              rem: 19,
              title: 'Econ Of Innovation & New Tech',
              instructor: 'Kenneth L. Simons'
            },
            '94158': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ECON-6110',
              sec: '01',
              rem: 5,
              title: 'Econ Of Innovation & New Tech',
              instructor: 'Kenneth L. Simons'
            },
            '94159': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-4280',
              sec: '01',
              rem: 19,
              title: 'Econometric Methods-big Data',
              instructor: 'Huaming Peng'
            },
            '94160': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-6280',
              sec: '01',
              rem: 5,
              title: 'Econometric Methods-big Data',
              instructor: 'Huaming Peng'
            },
            '94161': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ECON-4570',
              sec: '01',
              rem: 25,
              title: 'Econometrics',
              instructor: 'Rui Fan'
            },
            '94162': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-4570',
              sec: '03',
              rem: 25,
              title: 'Econometrics',
              instructor: 'Prakrati Thakur'
            },
            '94163': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ECON-4430',
              sec: '01',
              rem: 19,
              title: 'Economics Of Growth & Innov',
              instructor: 'Michael A. Klein'
            },
            '94164': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-4190',
              sec: '02',
              rem: 25,
              title: 'Intl Economics & Globalization',
              instructor: 'Michael A. Klein'
            },
            '94541': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-2010',
              sec: '03',
              rem: 60,
              title: 'Intermediate Microeconomic Theory',
              instructor: 'Ian S. Chadd'
            },
            '94542': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'ECON-2100',
              sec: '01',
              rem: 35,
              title: 'Econ Data Analysis & Applic.',
              instructor: 'Jason Ung Huh'
            },
            '94553': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-4170',
              sec: '02',
              rem: 5,
              title: 'Health Economics And Policy',
              instructor: 'Jason Ung Huh'
            },
            '94554': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'ECON-4270',
              sec: '02',
              rem: 5,
              title: 'Behavioral Economics',
              instructor: 'Ian S. Chadd'
            },
            '94910': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ECON-2100',
              sec: '02',
              rem: 35,
              title: 'Econ Data Analysis & Applic.',
              instructor: 'Prakrati Thakur'
            },
            '94911': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ECON-4010',
              sec: '01',
              rem: 19,
              title: 'Apld Microecon & Public Policy',
              instructor: 'Heng Liu'
            },
            '94912': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-4590',
              sec: '01',
              rem: 19,
              title: 'Adv Data Analy & Policy Eval',
              instructor: 'Rui Fan'
            },
            '94913': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'ECON-4290',
              sec: '01',
              rem: 14,
              title: 'Econ Of Biotech & Med Innov',
              instructor: 'Vivek Ghosal'
            },
            '94914': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'ECON-4290',
              sec: '02',
              rem: 5,
              title: 'Econ Of Biotech & Med Innov',
              instructor: 'Vivek Ghosal'
            },
            '94915': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1740 } ],
                [ 'R', { start: 1600, end: 1740 } ]
              ],
              id: 'ECON-6290',
              sec: '01',
              rem: 5,
              title: 'Econ Of Biotech & Med Innov',
              instructor: 'Vivek Ghosal'
            },
            '94916': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-4380',
              sec: '01',
              rem: 19,
              title: 'Labor Mrkts & Discrimination',
              instructor: 'Conor Lennon'
            },
            '94917': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-4220',
              sec: '01',
              rem: 19,
              title: 'Applied Game Theory',
              instructor: 'Jianjing Lin'
            },
            '94918': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-4220',
              sec: '02',
              rem: 19,
              title: 'Applied Game Theory',
              instructor: 'Heng Liu'
            },
            '94919': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-6220',
              sec: '01',
              rem: 5,
              title: 'Applied Game Theory',
              instructor: 'Jianjing Lin'
            },
            '94920': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ECON-6220',
              sec: '02',
              rem: 5,
              title: 'Applied Game Theory',
              instructor: 'Heng Liu'
            },
            '94921': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ECON-4230',
              sec: '01',
              rem: 19,
              title: 'Environmental Economics',
              instructor: 'Robeny Bruno Nkuiya Mbakop'
            },
            '94922': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ECON-6010',
              sec: '01',
              rem: 10,
              title: 'Apld Microecon & Public Policy',
              instructor: 'Heng Liu'
            },
            '94923': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ECON-4210',
              sec: '01',
              rem: 19,
              title: 'Cost-benefit Analysis',
              instructor: 'Jianjing Lin'
            },
            '94924': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ECON-6210',
              sec: '01',
              rem: 5,
              title: 'Adv Cost-benefit Analysis',
              instructor: 'Jianjing Lin'
            }
          },
          ECSE: {
            '90040': {
              daysTimes: [
                [ 'M', { start: -1, end: -1 } ],
                [ 'W', { start: -1, end: -1 } ],
                [ 'R', { start: -1, end: -1 } ],
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ECSE-4760',
              sec: '01',
              rem: 30,
              title: 'Real-time Applications In Control And Communications',
              instructor: 'Anak Agung Julius, Russell P. Kraft'
            },
            '90041': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'ECSE-2100',
              sec: '01',
              rem: 36,
              title: 'Fields And Waves I',
              instructor: 'James D. Rees'
            },
            '90075': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ],
                [ 'T', { start: 1900, end: 2050 } ],
                [ 'W', { start: 900, end: 1150 } ]
              ],
              id: 'ECSE-2010',
              sec: '01',
              rem: 60,
              title: 'Electric Circuits',
              instructor: 'Alex Patterson, Shayla Maya Sawyer'
            },
            '90078': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ],
                [ 'T', { start: 1900, end: 2050 } ],
                [ 'W', { start: 1400, end: 1650 } ]
              ],
              id: 'ECSE-2010',
              sec: '02',
              rem: 60,
              title: 'Electric Circuits',
              instructor: 'Alex Patterson, Shayla Maya Sawyer'
            },
            '90081': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'T', { start: 1900, end: 2050 } ],
                [ 'W', { start: 900, end: 1150 } ]
              ],
              id: 'ECSE-2050',
              sec: '01',
              rem: 40,
              title: 'Introduction To Electronics',
              instructor: 'Eric Fred Schubert'
            },
            '90103': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'ECSE-2610',
              sec: '01',
              rem: 40,
              title: 'Cptr Components & Oper',
              instructor: 'William James Stillman'
            },
            '90104': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1700, end: 1850 } ]
              ],
              id: 'ECSE-2610',
              sec: '03',
              rem: 36,
              title: 'Cptr Components & Oper',
              instructor: 'William James Stillman'
            },
            '90131': {
              daysTimes: [],
              id: 'ECSE-2940',
              sec: '00',
              rem: 0,
              title: 'Readings In Ecse',
              instructor: ''
            },
            '90153': {
              daysTimes: [],
              id: 'ECSE-6980',
              sec: '02',
              rem: 10,
              title: "Master's Project",
              instructor: 'Kyle Richard Wilt'
            },
            '90155': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '03',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Jian Sun'
            },
            '90157': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Eric Fred Schubert'
            },
            '90158': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Partha S. Dutta'
            },
            '90159': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Richard J Radke'
            },
            '90160': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '06',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Alex Algernon Theodore Gittens'
            },
            '90164': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '11',
              rem: 10,
              title: 'Dissertation',
              instructor: 'John Wen'
            },
            '90165': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '13',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Tat-Sing Chow'
            },
            '90166': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '14',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Moussa Ngom'
            },
            '90167': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '16',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ishwara B Bhat'
            },
            '90168': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '17',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Stacy Elizabeth Patterson'
            },
            '90171': {
              daysTimes: [],
              id: 'ECSE-6980',
              sec: '03',
              rem: 20,
              title: "Master's Project",
              instructor: 'Bulent Yener'
            },
            '90172': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '08',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'W. Randolph Franklin'
            },
            '90207': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '20',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Tong Zhang'
            },
            '90211': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '21',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Michael Shur'
            },
            '90216': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '22',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Alhussein A Abouzeid'
            },
            '90217': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '23',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Qiang Ji'
            },
            '90220': {
              daysTimes: [],
              id: 'ECSE-6980',
              sec: '04',
              rem: 10,
              title: "Master's Project",
              instructor: 'Luigi Vanfretti'
            },
            '90254': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '11',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'John Wen'
            },
            '90258': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '13',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Tat-Sing Chow'
            },
            '90305': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ECSE-4900',
              sec: '01',
              rem: 0,
              title: 'Multidisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Junichi Kanai'
            },
            '90306': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'T', { start: -1, end: -1 } ],
                [ 'W', { start: -1, end: -1 } ],
                [ 'R', { start: -1, end: -1 } ]
              ],
              id: 'ECSE-6300',
              sec: '01',
              rem: 24,
              title: 'Ic Fabrication Lab',
              instructor: 'Jianqiang Lu'
            },
            '90330': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '24',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90338': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ]
              ],
              id: 'ECSE-4220',
              sec: '01',
              rem: 40,
              title: 'Vlsi Design',
              instructor: 'Russell P. Kraft'
            },
            '90389': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '27',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Birsen Yazici'
            },
            '90391': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '30',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90419': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '32',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Koushik Kar'
            },
            '90420': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '34',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90429': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '37',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Tong Zhang'
            },
            '90430': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '37',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Tong Zhang'
            },
            '90431': {
              daysTimes: [],
              id: 'ECSE-6980',
              sec: '17',
              rem: 20,
              title: "Master's Project",
              instructor: 'Mona Mostafa Hella'
            },
            '90448': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ECSE-4900',
              sec: '02',
              rem: 0,
              title: 'Multidisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Junichi Kanai'
            },
            '90463': {
              daysTimes: [],
              id: 'ECSE-6940',
              sec: '00',
              rem: 0,
              title: 'Readings In Ecse',
              instructor: ''
            },
            '90486': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '40',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jian Sun'
            },
            '90492': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '22',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Alhussein A Abouzeid'
            },
            '90496': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '41',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90501': {
              daysTimes: [],
              id: 'ECSE-6980',
              sec: '20',
              rem: 25,
              title: "Master's Project",
              instructor: 'Eric Fred Schubert'
            },
            '90524': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ECSE-4900',
              sec: '03',
              rem: 0,
              title: 'Multidisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Junichi Kanai'
            },
            '90562': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '45',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Alhussein A Abouzeid'
            },
            '90568': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '46',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Zhaoran Huang'
            },
            '90673': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '47',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Mona Mostafa Hella'
            },
            '91091': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '43',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '91275': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ],
                [ 'W', { start: 900, end: 1150 } ]
              ],
              id: 'ECSE-4040',
              sec: '01',
              rem: 36,
              title: 'Digital Electronics',
              instructor: 'Tat-Sing Chow'
            },
            '91300': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '04',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Ge Wang'
            },
            '91301': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '18',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Michael Shur'
            },
            '91333': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jianqiang Lu'
            },
            '91340': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '16',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Jianqiang Lu'
            },
            '91343': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '19',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Mona Mostafa Hella'
            },
            '91344': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '12',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Santiago Paternain'
            },
            '91359': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '21',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Paul Matthew Schoch'
            },
            '91460': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'ECSE-4900',
              sec: '04',
              rem: 0,
              title: 'Multidisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Junichi Kanai'
            },
            '91472': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '08',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ge Wang'
            },
            '91500': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '15',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Shayla Maya Sawyer'
            },
            '91507': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '19',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Tianyi Chen'
            },
            '91524': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '26',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Paul Matthew Schoch'
            },
            '91526': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '48',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '91536': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '38',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '91635': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '24',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Christian M. Wetzel'
            },
            '91726': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '35',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '91820': {
              daysTimes: [],
              id: 'ECSE-6980',
              sec: '01',
              rem: 10,
              title: "Master's Project",
              instructor: 'Robert Frank Karlicek'
            },
            '91826': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '25',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Ishwara B Bhat'
            },
            '91863': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1500, end: 1650 } ]
              ],
              id: 'ECSE-2610',
              sec: '02',
              rem: 40,
              title: 'Cptr Components & Oper',
              instructor: 'William James Stillman'
            },
            '91864': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1900, end: 2050 } ]
              ],
              id: 'ECSE-2210',
              sec: '01',
              rem: 36,
              title: 'Microelectronics Technology',
              instructor: 'Zhaoran Huang, Salih Muhsin Celik'
            },
            '91866': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1900, end: 2050 } ]
              ],
              id: 'ECSE-2410',
              sec: '01',
              rem: 60,
              title: 'Signals And Systems',
              instructor: 'Kimberly Irene Oakes'
            },
            '91868': {
              daysTimes: [ [ 'W', { start: 1200, end: 1550 } ] ],
              id: 'ECSE-4130',
              sec: '01',
              rem: 18,
              title: 'Epe Lab',
              instructor: 'Meng Wang'
            },
            '91879': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '26',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Richard J Radke'
            },
            '91882': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '29',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Anak Agung Julius'
            },
            '91883': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '36',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Anak Agung Julius'
            },
            '91888': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '31',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Joe H Chow'
            },
            '91908': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '30',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Koushik Kar'
            },
            '92056': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '31',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Joe H Chow'
            },
            '92061': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '28',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Qiang Ji'
            },
            '92066': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '32',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Shayla Maya Sawyer'
            },
            '92086': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '28',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '92100': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '33',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Partha S. Dutta'
            },
            '92318': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '51',
              rem: 3,
              title: 'Dissertation',
              instructor: 'Robert Frank Karlicek'
            },
            '92390': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '25',
              rem: 10,
              title: 'Dissertation',
              instructor: 'W. Randolph Franklin'
            },
            '92454': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '52',
              rem: 5,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '92497': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'ECSE-2500',
              sec: '01',
              rem: 100,
              title: 'Engineering Probability',
              instructor: 'Richard J Radke'
            },
            '92528': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '53',
              rem: 20,
              title: "Master's Thesis",
              instructor: 'Meng Wang'
            },
            '92529': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '53',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Meng Wang'
            },
            '92530': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '55',
              rem: 15,
              title: "Master's Thesis",
              instructor: 'TBA'
            },
            '92531': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '55',
              rem: 15,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '92610': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '56',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Bulent Yener'
            },
            '92661': {
              daysTimes: [ [ 'T', { start: 1600, end: 1650 } ] ],
              id: 'ECSE-2900',
              sec: '01',
              rem: 110,
              title: 'Ecse Enrichment Seminar',
              instructor: 'Robert Frank Karlicek'
            },
            '92662': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'ECSE-4050',
              sec: '01',
              rem: 36,
              title: 'Advanced Electronic Circuits',
              instructor: 'Kyle Richard Wilt'
            },
            '92663': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'ECSE-6050',
              sec: '01',
              rem: 36,
              title: 'Advanced Electronic Circuits',
              instructor: 'Kyle Richard Wilt'
            },
            '92669': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '41',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Ali Tajer'
            },
            '92670': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '42',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ali Tajer'
            },
            '92727': {
              daysTimes: [],
              id: 'ECSE-6980',
              sec: '05',
              rem: 10,
              title: "Master's Project",
              instructor: 'Richard J Radke'
            },
            '92959': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '60',
              rem: 1,
              title: "Master's Thesis",
              instructor: 'TBA'
            },
            '93001': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'T', { start: 1900, end: 2050 } ],
                [ 'W', { start: 1200, end: 1450 } ]
              ],
              id: 'ECSE-2050',
              sec: '02',
              rem: 40,
              title: 'Introduction To Electronics',
              instructor: 'Eric Fred Schubert'
            },
            '93007': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ECSE-4090',
              sec: '01',
              rem: 12,
              title: 'Mechatronics',
              instructor: 'Sandipan Mishra'
            },
            '93045': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '39',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '93065': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '56',
              rem: 0,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '93142': {
              daysTimes: [],
              id: 'ECSE-6980',
              sec: '11',
              rem: 10,
              title: "Master's Project",
              instructor: 'Koushik Kar'
            },
            '93197': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ECSE-1010',
              sec: '01',
              rem: 80,
              title: 'Introduction To Ecse',
              instructor: 'Santiago Paternain'
            },
            '93198': {
              daysTimes: [
                [ 'T', { start: 1230, end: 1350 } ],
                [ 'F', { start: 1230, end: 1350 } ]
              ],
              id: 'ECSE-2110',
              sec: '01',
              rem: 45,
              title: 'Electrical Energy Systems',
              instructor: 'Prabhakar Neti'
            },
            '93199': {
              daysTimes: [
                [ 'M', { start: 1230, end: 1350 } ],
                [ 'R', { start: 1230, end: 1350 } ]
              ],
              id: 'ECSE-4964',
              sec: '01',
              rem: 20,
              title: 'Distrib. Optimiz. & Learning',
              instructor: 'Tianyi Chen'
            },
            '93200': {
              daysTimes: [
                [ 'M', { start: 1230, end: 1350 } ],
                [ 'R', { start: 1230, end: 1350 } ]
              ],
              id: 'ECSE-6964',
              sec: '01',
              rem: 20,
              title: 'Distrib. Optimiz. & Learning',
              instructor: 'Tianyi Chen'
            },
            '93202': {
              daysTimes: [ [ 'W', { start: 1530, end: 1730 } ] ],
              id: 'ECSE-6900',
              sec: '01',
              rem: 120,
              title: 'Seminar in Ecse',
              instructor: 'Tianyi Chen'
            },
            '93225': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '58',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Sufei Shi'
            },
            '93233': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '59',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Bulent Yener'
            },
            '93299': {
              daysTimes: [],
              id: 'ECSE-6980',
              sec: '06',
              rem: 10,
              title: "Master's Project",
              instructor: 'Ali Tajer'
            },
            '93394': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ]
              ],
              id: 'ECSE-4560',
              sec: '01',
              rem: 30,
              title: 'Modern Communication Sys',
              instructor: 'Koushik Kar'
            },
            '93395': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ]
              ],
              id: 'ECSE-6560',
              sec: '01',
              rem: 10,
              title: 'Modern Communication Sys',
              instructor: 'Koushik Kar'
            },
            '93410': {
              daysTimes: [
                [ 'M', { start: 1230, end: 1350 } ],
                [ 'R', { start: 1230, end: 1350 } ]
              ],
              id: 'ECSE-6090',
              sec: '01',
              rem: 10,
              title: 'Advanced Power Electronics',
              instructor: 'Zheyu Zhang'
            },
            '93412': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'ECSE-6680',
              sec: '01',
              rem: 36,
              title: 'Advanced Vlsi Design',
              instructor: 'Tong Zhang'
            },
            '93528': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ],
                [ 'W', { start: 1300, end: 1550 } ]
              ],
              id: 'ECSE-6700',
              sec: '01',
              rem: 10,
              title: "Computer Architecture Prototyping With Fpga's",
              instructor: 'Liu Liu'
            },
            '93556': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '36',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Luigi Vanfretti'
            },
            '93557': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '29',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Luigi Vanfretti'
            },
            '93627': {
              daysTimes: [],
              id: 'ECSE-6980',
              sec: '07',
              rem: 10,
              title: "Master's Project",
              instructor: 'Tong Zhang'
            },
            '93634': {
              daysTimes: [ [ 'W', { start: 900, end: 1150 } ] ],
              id: 'ECSE-6210',
              sec: '01',
              rem: 20,
              title: 'Advance Device Concepts',
              instructor: 'Michael Shur'
            },
            '93668': {
              daysTimes: [],
              id: 'ECSE-2960',
              sec: '01',
              rem: 10,
              title: 'Practicum-college Teaching I',
              instructor: 'Jianqiang Lu'
            },
            '93669': {
              daysTimes: [],
              id: 'ECSE-2960',
              sec: '02',
              rem: 15,
              title: 'Practicum-college Teaching I',
              instructor: 'Jianqiang Lu'
            },
            '93730': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'ECSE-4850',
              sec: '01',
              rem: 35,
              title: 'Introduction To Deep Learning',
              instructor: 'Qiang Ji'
            },
            '93731': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'ECSE-6850',
              sec: '01',
              rem: 30,
              title: 'Intro To Deep Learning',
              instructor: 'Qiang Ji'
            },
            '93741': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '33',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '93748': {
              daysTimes: [],
              id: 'ECSE-6990',
              sec: '39',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Sandipan Mishra'
            },
            '93749': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Sandipan Mishra'
            },
            '93868': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'ECSE-6460',
              sec: '01',
              rem: 36,
              title: 'Multivariable Control Systems',
              instructor: 'John Wen'
            },
            '93869': {
              daysTimes: [
                [ 'T', { start: 1230, end: 1350 } ],
                [ 'F', { start: 1230, end: 1350 } ]
              ],
              id: 'ECSE-6520',
              sec: '01',
              rem: 20,
              title: 'Detection & Est Theory',
              instructor: 'Birsen Yazici'
            },
            '93995': {
              daysTimes: [],
              id: 'ECSE-6980',
              sec: '09',
              rem: 10,
              title: "Master's Project",
              instructor: 'Tianyi Chen'
            },
            '94171': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'ECSE-4490',
              sec: '01',
              rem: 15,
              title: 'Robotics II',
              instructor: 'Kimberly Irene Oakes'
            },
            '94172': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'ECSE-6490',
              sec: '01',
              rem: 15,
              title: 'Robotics II',
              instructor: 'Kimberly Irene Oakes'
            },
            '94198': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ]
              ],
              id: 'ECSE-4660',
              sec: '01',
              rem: 30,
              title: 'Internetworking Of Things',
              instructor: 'Koushik Kar'
            },
            '94199': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ]
              ],
              id: 'ECSE-6660',
              sec: '01',
              rem: 20,
              title: 'Internetworking Of Things',
              instructor: 'Koushik Kar'
            },
            '94310': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'ECSE-4310',
              sec: '01',
              rem: 15,
              title: 'Fdmtls Of Rf/microwave Engr',
              instructor: 'Mona Mostafa Hella'
            },
            '94311': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'ECSE-6310',
              sec: '01',
              rem: 15,
              title: 'Fdmtls Of Rf/microwave Engr',
              instructor: 'Mona Mostafa Hella'
            },
            '94462': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'ECSE-4141',
              sec: '01',
              rem: 30,
              title: 'Renewable Power Generation',
              instructor: 'Jian Sun'
            },
            '94463': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'ECSE-6141',
              sec: '01',
              rem: 30,
              title: 'Renewable Power Generation',
              instructor: 'Jian Sun'
            },
            '94474': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'ECSE-4961',
              sec: '01',
              rem: 100,
              title: 'Fab Tech f Semiconductor Mfg',
              instructor: 'Jianqiang Lu'
            },
            '94475': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'ECSE-6961',
              sec: '01',
              rem: 100,
              title: 'Fab Tech f Semiconductor Mfg',
              instructor: 'Jianqiang Lu'
            },
            '94494': {
              daysTimes: [ [ 'W', { start: 900, end: 1150 } ] ],
              id: 'ECSE-4966',
              sec: '01',
              rem: 20,
              title: 'Advance Device Concepts',
              instructor: 'Michael Shur'
            },
            '94616': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '44',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jian Shi'
            },
            '94634': {
              daysTimes: [],
              id: 'ECSE-9990',
              sec: '49',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Liu Liu'
            },
            '94732': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ],
                [ 'W', { start: 1300, end: 1550 } ]
              ],
              id: 'ECSE-4780',
              sec: '01',
              rem: 26,
              title: 'Advanced Computer Hardware Design',
              instructor: 'Liu Liu'
            },
            '94733': {
              daysTimes: [
                [ 'M', { start: 1230, end: 1350 } ],
                [ 'R', { start: 1230, end: 1350 } ]
              ],
              id: 'ECSE-4962',
              sec: '01',
              rem: 20,
              title: 'Fund Of Optoelectronics Tech',
              instructor: 'Zhaoran Huang'
            },
            '94734': {
              daysTimes: [
                [ 'M', { start: 1230, end: 1350 } ],
                [ 'R', { start: 1230, end: 1350 } ]
              ],
              id: 'ECSE-6962',
              sec: '01',
              rem: 10,
              title: 'Fund Of Optoelectronics Tech',
              instructor: 'Zhaoran Huang'
            },
            '94735': {
              daysTimes: [
                [ 'M', { start: 1230, end: 1350 } ],
                [ 'R', { start: 1230, end: 1350 } ]
              ],
              id: 'ECSE-4963',
              sec: '01',
              rem: 20,
              title: 'Advanced Power Electronics',
              instructor: 'Zheyu Zhang'
            },
            '94736': {
              daysTimes: [
                [ 'T', { start: 1230, end: 1350 } ],
                [ 'F', { start: 1230, end: 1350 } ]
              ],
              id: 'ECSE-4965',
              sec: '01',
              rem: 30,
              title: 'Intro To Robot Programming',
              instructor: 'Kimberly Irene Oakes'
            },
            '94737': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ]
              ],
              id: 'ECSE-6530',
              sec: '01',
              rem: 30,
              title: 'Inform Theory & Coding',
              instructor: 'Ali Tajer'
            },
            '94738': {
              daysTimes: [
                [ 'T', { start: 1230, end: 1350 } ],
                [ 'F', { start: 1230, end: 1350 } ]
              ],
              id: 'ECSE-4967',
              sec: '01',
              rem: 30,
              title: 'Intro To Quantum Elec Devices',
              instructor: 'Alex Patterson'
            }
          },
          ESCI: {
            '90413': {
              daysTimes: [],
              id: 'ESCI-9990',
              sec: '08',
              rem: 10,
              title: "Doctor's Thesis In Engrng Sci",
              instructor: 'TBA'
            },
            '90907': {
              daysTimes: [],
              id: 'ESCI-9990',
              sec: '09',
              rem: 10,
              title: "Doctor's Thesis In Engrng Sci",
              instructor: 'TBA'
            },
            '91086': {
              daysTimes: [],
              id: 'ESCI-9990',
              sec: '10',
              rem: 10,
              title: "Doctor's Thesis In Engrng Sci",
              instructor: 'Toh-Ming Lu'
            },
            '91479': {
              daysTimes: [],
              id: 'ESCI-9990',
              sec: '01',
              rem: 10,
              title: "Doctor's Thesis In Engrng Sci",
              instructor: 'TBA'
            },
            '91532': {
              daysTimes: [],
              id: 'ESCI-9990',
              sec: '02',
              rem: 10,
              title: "Doctor's Thesis In Engrng Sci",
              instructor: 'Robert Frank Karlicek'
            },
            '91880': {
              daysTimes: [],
              id: 'ESCI-9990',
              sec: '03',
              rem: 10,
              title: "Doctor's Thesis In Engrng Sci",
              instructor: 'Eric Fred Schubert'
            },
            '92149': {
              daysTimes: [],
              id: 'ESCI-9990',
              sec: '04',
              rem: 10,
              title: "Doctor's Thesis In Engrng Sci",
              instructor: 'Ishwara B Bhat'
            }
          },
          ENVE: {
            '90173': {
              daysTimes: [],
              id: 'ENVE-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Marianne C. Nyman'
            },
            '90174': {
              daysTimes: [],
              id: 'ENVE-9990',
              sec: '04',
              rem: 60,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90175': {
              daysTimes: [],
              id: 'ENVE-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'James Kilduff'
            },
            '90521': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ENVE-4180',
              sec: '01',
              rem: 15,
              title: 'Environmental Process Design',
              instructor: 'James Kilduff'
            },
            '91233': {
              daysTimes: [],
              id: 'ENVE-2940',
              sec: '00',
              rem: 0,
              title: 'Readings In Enee',
              instructor: 'Marianne C. Nyman'
            },
            '91234': {
              daysTimes: [],
              id: 'ENVE-6940',
              sec: '00',
              rem: 0,
              title: 'Readings In Enve',
              instructor: ''
            },
            '91894': {
              daysTimes: [],
              id: 'ENVE-6980',
              sec: '01',
              rem: 5,
              title: "Master's Project",
              instructor: 'James Kilduff'
            },
            '91997': {
              daysTimes: [],
              id: 'ENVE-6990',
              sec: '01',
              rem: 10,
              title: 'Masters Thesis',
              instructor: 'James Kilduff'
            },
            '92239': {
              daysTimes: [],
              id: 'ENVE-6990',
              sec: '02',
              rem: 10,
              title: 'Masters Thesis',
              instructor: 'Marianne C. Nyman'
            },
            '92345': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'ENVE-4340',
              sec: '01',
              rem: 15,
              title: 'Physicochemical Proc In Enve',
              instructor: 'James Kilduff'
            },
            '92346': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1200, end: 1450 } ]
              ],
              id: 'ENVE-4320',
              sec: '01',
              rem: 15,
              title: 'Env Chemodynamics',
              instructor: 'Marianne C. Nyman'
            },
            '93653': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ],
                [ 'W', { start: 1300, end: 1450 } ]
              ],
              id: 'ENVE-2110',
              sec: '01',
              rem: 40,
              title: 'Introduction To Env. Engr.',
              instructor: 'Eyosias Legesse Ashenafi'
            },
            '93862': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'ENVE-4200',
              sec: '01',
              rem: 25,
              title: 'Solid & Hazardous Waste',
              instructor: 'Eyosias Legesse Ashenafi'
            },
            '94443': {
              daysTimes: [
                [ 'T', { start: 1500, end: 1800 } ],
                [ 'W', { start: 1500, end: 1650 } ]
              ],
              id: 'ENVE-4961',
              sec: '01',
              rem: 15,
              title: 'Photobiology & Hydroponics',
              instructor: 'Eyosias Legesse Ashenafi'
            },
            '94612': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ],
                [ 'W', { start: 800, end: 950 } ]
              ],
              id: 'ENVE-2110',
              sec: '02',
              rem: 40,
              title: 'Introduction To Env. Engr.',
              instructor: 'Eyosias Legesse Ashenafi'
            },
            '94707': {
              daysTimes: [],
              id: 'ENVE-2940',
              sec: '02',
              rem: 5,
              title: 'Readings In Enee',
              instructor: ''
            },
            '94723': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ENVE-6960',
              sec: '01',
              rem: 25,
              title: 'Nanotechnology In Water Rsrch',
              instructor: 'Bin Gao'
            }
          },
          GSAS: {
            '93446': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'GSAS-1040',
              sec: '01',
              rem: 19,
              title: 'Art For Interactive Media',
              instructor: 'Nina Stanley'
            },
            '93488': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'GSAS-1600',
              sec: '01',
              rem: 19,
              title: 'History And Culture Of Games',
              instructor: 'Brandi Lee Ann Brace'
            },
            '93489': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'GSAS-2540',
              sec: '01',
              rem: 22,
              title: 'Intro To Game Programming',
              instructor: 'Yiyuan Zeng'
            },
            '93490': {
              daysTimes: [ [ 'W', { start: 1400, end: 1750 } ] ],
              id: 'GSAS-4510',
              sec: '01',
              rem: 26,
              title: 'Experimental Game Design',
              instructor: 'Kathleen Ruiz'
            },
            '93645': {
              daysTimes: [ [ 'W', { start: 1300, end: 1650 } ] ],
              id: 'GSAS-4540',
              sec: '01',
              rem: 49,
              title: 'Game Development II',
              instructor: 'Eric Louis Ameres, Yiyuan Zeng'
            },
            '93735': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'GSAS-2540',
              sec: '02',
              rem: 22,
              title: 'Intro To Game Programming',
              instructor: 'Yiyuan Zeng'
            },
            '93883': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'GSAS-1040',
              sec: '02',
              rem: 19,
              title: 'Art For Interactive Media',
              instructor: 'Nina Stanley'
            },
            '94166': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'GSAS-2520',
              sec: '01',
              rem: 19,
              title: 'Intro To Game Storytelling',
              instructor: 'Brandi Lee Ann Brace'
            },
            '94167': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'GSAS-4990',
              sec: '01',
              rem: 19,
              title: 'Gsas Capstone',
              instructor: 'Maurice W Suckling'
            },
            '94168': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'GSAS-6200',
              sec: '01',
              rem: 19,
              title: 'Topics In Game Research',
              instructor: 'Mei Si'
            },
            '94170': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'GSAS-4260',
              sec: '01',
              rem: 19,
              title: 'Game Narrative Design',
              instructor: 'TBA'
            },
            '94319': {
              daysTimes: [],
              id: 'GSAS-6980',
              sec: '01',
              rem: 10,
              title: "Master's Project",
              instructor: 'Eric Louis Ameres'
            },
            '94320': {
              daysTimes: [],
              id: 'GSAS-6980',
              sec: '02',
              rem: 10,
              title: "Master's Project",
              instructor: 'Nicholas J. Mizer'
            },
            '94321': {
              daysTimes: [],
              id: 'GSAS-6980',
              sec: '03',
              rem: 10,
              title: "Master's Project",
              instructor: 'Robert F. Nideffer'
            },
            '94322': {
              daysTimes: [],
              id: 'GSAS-6980',
              sec: '04',
              rem: 10,
              title: "Master's Project",
              instructor: 'Kathleen Ruiz'
            },
            '94323': {
              daysTimes: [],
              id: 'GSAS-6980',
              sec: '05',
              rem: 10,
              title: "Master's Project",
              instructor: 'Silvia Ruzanka'
            },
            '94324': {
              daysTimes: [],
              id: 'GSAS-6980',
              sec: '06',
              rem: 10,
              title: "Master's Project",
              instructor: 'Mei Si'
            },
            '94331': {
              daysTimes: [],
              id: 'GSAS-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Robert F. Nideffer'
            },
            '94544': {
              daysTimes: [],
              id: 'GSAS-6980',
              sec: '07',
              rem: 10,
              title: "Master's Project",
              instructor: 'Benjamin Chia-Ming Chang'
            },
            '94545': {
              daysTimes: [],
              id: 'GSAS-6980',
              sec: '08',
              rem: 10,
              title: "Master's Project",
              instructor: 'Kathleen A. Galloway'
            },
            '94546': {
              daysTimes: [],
              id: 'GSAS-6980',
              sec: '09',
              rem: 10,
              title: "Master's Project",
              instructor: 'James Wilson Malazita'
            },
            '94547': {
              daysTimes: [],
              id: 'GSAS-6980',
              sec: '10',
              rem: 10,
              title: "Master's Project",
              instructor: 'Maurice W Suckling'
            },
            '94548': {
              daysTimes: [],
              id: 'GSAS-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Benjamin Chia-Ming Chang'
            },
            '94549': {
              daysTimes: [],
              id: 'GSAS-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'James Wilson Malazita'
            },
            '94550': {
              daysTimes: [],
              id: 'GSAS-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Silvia Ruzanka'
            },
            '94551': {
              daysTimes: [],
              id: 'GSAS-9990',
              sec: '06',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Maurice W Suckling'
            },
            '94560': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'GSAS-4250',
              sec: '01',
              rem: 19,
              title: 'Writing For Games II',
              instructor: 'Maurice W Suckling'
            },
            '94586': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'GSAS-4960',
              sec: '01',
              rem: 19,
              title: 'Psychology Of Games',
              instructor: 'Ralph G Noble'
            },
            '94628': {
              daysTimes: [
                [ 'M', { start: 800, end: 930 } ],
                [ 'R', { start: 800, end: 930 } ]
              ],
              id: 'GSAS-6500',
              sec: '01',
              rem: 19,
              title: 'Advanced Game Design',
              instructor: 'Eric Louis Ameres'
            },
            '94852': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'GSAS-1600',
              sec: '02',
              rem: 19,
              title: 'History And Culture Of Games',
              instructor: 'Brandi Lee Ann Brace'
            },
            '94853': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'GSAS-2520',
              sec: '02',
              rem: 19,
              title: 'Intro To Game Storytelling',
              instructor: 'TBA'
            },
            '94854': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'GSAS-4230',
              sec: '01',
              rem: 19,
              title: 'Game Animation',
              instructor: 'Silvia Ruzanka'
            },
            '94855': {
              daysTimes: [],
              id: 'GSAS-4240',
              sec: '01',
              rem: 19,
              title: 'Writing For Games I',
              instructor: 'TBA'
            },
            '94858': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'GSAS-4550',
              sec: '01',
              rem: 19,
              title: 'Game Architecture',
              instructor: 'Benjamin Chia-Ming Chang'
            },
            '94862': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'GSAS-4961',
              sec: '01',
              rem: 19,
              title: 'Topics In Games Research',
              instructor: 'Mei Si'
            },
            '94863': {
              daysTimes: [],
              id: 'GSAS-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Kathleen Ruiz'
            }
          },
          INQR: {
            '94866': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'INQR-1100',
              sec: '01',
              rem: 19,
              title: 'Science, Tech, & Society',
              instructor: 'Jonathan Garrett Wald'
            },
            '94867': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'INQR-1100',
              sec: '02',
              rem: 19,
              title: 'Science, Tech, & Society',
              instructor: 'Jonathan Garrett Wald'
            },
            '94868': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'INQR-1100',
              sec: '03',
              rem: 19,
              title: 'Science, Tech, & Society',
              instructor: 'Jonathan Garrett Wald'
            },
            '94869': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'INQR-1160',
              sec: '01',
              rem: 19,
              title: 'Science & Science Misconduct',
              instructor: 'Susan Lynn Smith'
            },
            '94870': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'INQR-1165',
              sec: '01',
              rem: 19,
              title: 'Great Ideas In Philosophy',
              instructor: 'Daniel Peter Thero'
            },
            '94872': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'INQR-1175',
              sec: '01',
              rem: 19,
              title: 'Well-being: Cultving Curiosity',
              instructor: 'Alicia Ann Walf'
            },
            '94873': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'INQR-1200',
              sec: '01',
              rem: 300,
              title: 'Principles Of Economics',
              instructor: 'Sarah Marsden Greene'
            },
            '94874': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'INQR-1200',
              sec: '02',
              rem: 300,
              title: 'Principles Of Economics',
              instructor: 'Sarah Marsden Greene'
            },
            '94876': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'INQR-1492',
              sec: '01',
              rem: 19,
              title: 'Language And Power',
              instructor: 'Tamar Gordon'
            },
            '94877': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'INQR-1560',
              sec: '01',
              rem: 19,
              title: 'Media And Society',
              instructor: 'Christopher C. Jeansonne'
            },
            '94880': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'INQR-1562',
              sec: '01',
              rem: 19,
              title: 'Life In Color',
              instructor: 'Sara L. Tack'
            },
            '94905': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'INQR-1700',
              sec: '01',
              rem: 19,
              title: 'Songwriting Workshop',
              instructor: 'Ross A. Rice'
            },
            '94906': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'INQR-1960',
              sec: '01',
              rem: 100,
              title: 'Ai & Society',
              instructor: 'Mei Si, Ralph G Noble'
            },
            '94907': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'INQR-1961',
              sec: '01',
              rem: 19,
              title: 'Feminist Critiques Of Reason',
              instructor: 'Thomas Macaulay Ferguson'
            },
            '94908': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'INQR-1962',
              sec: '01',
              rem: 19,
              title: 'Writing For A Global Audience',
              instructor: 'Anita Kay Greenfield'
            },
            '94909': {
              daysTimes: [
                [ 'T', { start: 1600, end: 1750 } ],
                [ 'F', { start: 1600, end: 1750 } ]
              ],
              id: 'INQR-1962',
              sec: '02',
              rem: 19,
              title: 'Writing For A Global Audience',
              instructor: 'Anita Kay Greenfield'
            },
            '94925': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1050 } ],
                [ 'F', { start: 1000, end: 1050 } ],
                [ 'T', { start: 1200, end: 1250 } ],
                [ 'F', { start: 1200, end: 1250 } ]
              ],
              id: 'INQR-1220',
              sec: '01',
              rem: 19,
              title: 'It & Society',
              instructor: 'Katherine Anne Tyrol'
            },
            '94926': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1050 } ],
                [ 'F', { start: 1000, end: 1050 } ],
                [ 'T', { start: 1200, end: 1250 } ],
                [ 'F', { start: 1200, end: 1250 } ]
              ],
              id: 'INQR-1220',
              sec: '02',
              rem: 19,
              title: 'It & Society',
              instructor: 'Katherine Anne Tyrol'
            }
          },
          ISYE: {
            '92021': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ISYE-4270',
              sec: '01',
              rem: 0,
              title: 'Mulitdisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Junichi Kanai'
            },
            '92022': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ISYE-4270',
              sec: '02',
              rem: 0,
              title: 'Mulitdisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Junichi Kanai'
            },
            '92023': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ISYE-4270',
              sec: '03',
              rem: 0,
              title: 'Mulitdisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Nima Ahmadi'
            },
            '92024': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'ISYE-4270',
              sec: '04',
              rem: 0,
              title: 'Mulitdisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Junichi Kanai'
            },
            '92025': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ISYE-6620',
              sec: '01',
              rem: 20,
              title: 'Discrete Event Simulation',
              instructor: 'Nima Ahmadi'
            },
            '92026': {
              daysTimes: [],
              id: 'ISYE-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Li Liu'
            },
            '92027': {
              daysTimes: [],
              id: 'ISYE-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Martha Rose Grabowski'
            },
            '92028': {
              daysTimes: [],
              id: 'ISYE-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'William Alan Wallace'
            },
            '92029': {
              daysTimes: [],
              id: 'ISYE-9990',
              sec: '14',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '92030': {
              daysTimes: [],
              id: 'ISYE-9990',
              sec: '19',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '92160': {
              daysTimes: [],
              id: 'ISYE-6990',
              sec: '01',
              rem: 1,
              title: "Master's Thesis",
              instructor: 'William Alan Wallace'
            },
            '92192': {
              daysTimes: [],
              id: 'ISYE-6990',
              sec: '02',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Yinan Wang'
            },
            '92289': {
              daysTimes: [],
              id: 'ISYE-6990',
              sec: '03',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'TBA'
            },
            '92341': {
              daysTimes: [ [ 'W', { start: 1100, end: 1150 } ] ],
              id: 'ISYE-1100',
              sec: '01',
              rem: 35,
              title: 'Introduction To Industrial & Systems Engineering',
              instructor: 'Esra Agca Aktunc'
            },
            '92342': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ISYE-4290',
              sec: '01',
              rem: 30,
              title: 'Discrete Event Sim  Modeling',
              instructor: 'Nima Ahmadi'
            },
            '92365': {
              daysTimes: [],
              id: 'ISYE-6980',
              sec: '01',
              rem: 1,
              title: 'Masters Project',
              instructor: 'Yinan Wang'
            },
            '92626': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'ISYE-4140',
              sec: '01',
              rem: 40,
              title: 'Statistical Analysis',
              instructor: 'Yinan Wang'
            },
            '93019': {
              daysTimes: [],
              id: 'ISYE-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jennifer Ann Pazour'
            },
            '93020': {
              daysTimes: [],
              id: 'ISYE-6990',
              sec: '04',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Jennifer Ann Pazour'
            },
            '93209': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'ISYE-2210',
              sec: '01',
              rem: 30,
              title: 'Production And Operations Management',
              instructor: 'Diego Alejandro Moran Ramirez'
            },
            '93430': {
              daysTimes: [],
              id: 'ISYE-4240',
              sec: 'H01',
              rem: 25,
              title: 'Engr Proj Management',
              instructor: 'Antonella Zompa'
            },
            '93491': {
              daysTimes: [],
              id: 'ISYE-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Deborah L. McGuinness'
            },
            '93492': {
              daysTimes: [],
              id: 'ISYE-9990',
              sec: '06',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Yinan Wang'
            },
            '93493': {
              daysTimes: [],
              id: 'ISYE-6990',
              sec: '08',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'David Joseph Mendonca'
            },
            '93494': {
              daysTimes: [],
              id: 'ISYE-9990',
              sec: '08',
              rem: 10,
              title: 'Dissertation',
              instructor: 'David Joseph Mendonca'
            },
            '93495': {
              daysTimes: [],
              id: 'ISYE-9990',
              sec: '13',
              rem: 10,
              title: 'Dissertation',
              instructor: 'James Bailey'
            },
            '93721': {
              daysTimes: [],
              id: 'ISYE-6620',
              sec: 'H01',
              rem: 25,
              title: 'Discrete Event Simulation',
              instructor: 'TBA'
            },
            '93722': {
              daysTimes: [],
              id: 'ISYE-6610',
              sec: 'H01',
              rem: 25,
              title: 'Systems Modeling In Dses',
              instructor: 'Amit Mathur'
            },
            '93781': {
              daysTimes: [],
              id: 'ISYE-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Kristen Rene Schell'
            },
            '93917': {
              daysTimes: [],
              id: 'ISYE-6600',
              sec: 'H01',
              rem: 25,
              title: 'Design Of Manufacturing Systems And Supply Chains',
              instructor: 'David Joseph Stec'
            },
            '93918': {
              daysTimes: [ [ 'W', { start: 1400, end: 1640 } ] ],
              id: 'ISYE-4350',
              sec: '01',
              rem: 65,
              title: 'Systems Eng & Social Media',
              instructor: 'Rostyslav Korolov'
            },
            '93966': {
              daysTimes: [],
              id: 'ISYE-9990',
              sec: '09',
              rem: 5,
              title: 'Dissertation',
              instructor: 'Kristin P Bennett'
            },
            '94224': {
              daysTimes: [ [ 'W', { start: 1400, end: 1640 } ] ],
              id: 'ISYE-6350',
              sec: '01',
              rem: 65,
              title: 'Syst Engineer & Social Media',
              instructor: 'Rostyslav Korolov'
            },
            '94225': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'ISYE-4330',
              sec: '01',
              rem: 45,
              title: 'Design Of Experiments',
              instructor: 'Nima Ahmadi'
            },
            '94236': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'ISYE-6770',
              sec: '01',
              rem: 25,
              title: 'Linear And Conic Optimization',
              instructor: 'John E. Mitchell'
            },
            '94237': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'ISYE-6020',
              sec: '01',
              rem: 45,
              title: 'Design Of Experiments',
              instructor: 'Nima Ahmadi'
            },
            '94515': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ]
              ],
              id: 'ISYE-4960',
              sec: '01',
              rem: 35,
              title: 'Stochastic Mthds In Oper Rsrch',
              instructor: 'Bahar Cavdar'
            },
            '94722': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ISYE-4555',
              sec: '01',
              rem: 30,
              title: 'Ethical Engr, Engring, & Tech',
              instructor: 'Azita Hirsa'
            },
            '94761': {
              daysTimes: [
                [ 'M', { start: 830, end: 950 } ],
                [ 'R', { start: 830, end: 950 } ]
              ],
              id: 'ISYE-4210',
              sec: '01',
              rem: 30,
              title: 'Desgn & Analys Of Supply Chain',
              instructor: 'Jennifer Ann Pazour'
            },
            '94764': {
              daysTimes: [
                [ 'M', { start: 830, end: 950 } ],
                [ 'R', { start: 830, end: 950 } ]
              ],
              id: 'ISYE-6600',
              sec: '01',
              rem: 20,
              title: 'Design Of Manufacturing Systems And Supply Chains',
              instructor: 'Jennifer Ann Pazour'
            },
            '94773': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'ISYE-6550',
              sec: '01',
              rem: 30,
              title: 'Network Flows',
              instructor: 'James Bailey'
            },
            '94803': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ISYE-4370',
              sec: '01',
              rem: 25,
              title: 'Engineering Data Analytics',
              instructor: 'Esra Agca Aktunc'
            },
            '94804': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ISYE-6370',
              sec: '01',
              rem: 25,
              title: 'Engineering Data Analytics',
              instructor: 'Esra Agca Aktunc'
            }
          },
          ITWS: {
            '92019': {
              daysTimes: [ [ 'W', { start: 1100, end: 1350 } ] ],
              id: 'ITWS-6300',
              sec: '01',
              rem: 15,
              title: 'Business Issues For Engineers And Scientists',
              instructor: 'Kevin R. Stewart'
            },
            '92020': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'ITWS-6800',
              sec: '01',
              rem: 6,
              title: "It  Master's Capstone",
              instructor: 'Kevin R. Stewart'
            },
            '92036': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1050 } ],
                [ 'F', { start: 1000, end: 1050 } ],
                [ 'T', { start: 1100, end: 1150 } ],
                [ 'F', { start: 1100, end: 1150 } ]
              ],
              id: 'ITWS-1220',
              sec: '01',
              rem: 19,
              title: 'It & Society',
              instructor: 'Katherine Anne Tyrol'
            },
            '92216': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'ITWS-4100',
              sec: '01',
              rem: 26,
              title: 'It & Web Science Capstone',
              instructor: 'Kevin R. Stewart'
            },
            '92217': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'ITWS-4370',
              sec: '01',
              rem: 40,
              title: 'Information System Security',
              instructor: 'Brian Robert Callahan'
            },
            '92458': {
              daysTimes: [ [ 'W', { start: 900, end: 1150 } ] ],
              id: 'ITWS-4400',
              sec: '01',
              rem: 5,
              title: 'Xinformatics',
              instructor: 'Thilanka Munasinghe'
            },
            '92459': {
              daysTimes: [ [ 'W', { start: 900, end: 1150 } ] ],
              id: 'ITWS-6400',
              sec: '01',
              rem: 23,
              title: 'Xinformatics',
              instructor: 'Thilanka Munasinghe'
            },
            '92636': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'ITWS-4500',
              sec: '01',
              rem: 45,
              title: 'Web Science Systems Dev',
              instructor: 'Brian Robert Callahan'
            },
            '93004': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ITWS-4600',
              sec: '01',
              rem: 5,
              title: 'Data Analytics',
              instructor: 'Thilanka Munasinghe'
            },
            '93005': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ITWS-6600',
              sec: '01',
              rem: 15,
              title: 'Data Analytics',
              instructor: 'Thilanka Munasinghe'
            },
            '93179': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1050 } ],
                [ 'F', { start: 1000, end: 1050 } ],
                [ 'T', { start: 1100, end: 1150 } ],
                [ 'F', { start: 1100, end: 1150 } ]
              ],
              id: 'ITWS-1220',
              sec: '02',
              rem: 19,
              title: 'It & Society',
              instructor: 'Katherine Anne Tyrol'
            },
            '93407': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'M', { start: 1800, end: 1950 } ]
              ],
              id: 'ITWS-1100',
              sec: '01',
              rem: 30,
              title: 'Intro To It & Web Science',
              instructor: 'Richard M. Plotka'
            },
            '93529': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ITWS-6600',
              sec: '02',
              rem: 15,
              title: 'Data Analytics',
              instructor: 'Thilanka Munasinghe'
            },
            '93682': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1050 } ],
                [ 'F', { start: 1000, end: 1050 } ],
                [ 'T', { start: 1100, end: 1150 } ],
                [ 'F', { start: 1100, end: 1150 } ]
              ],
              id: 'ITWS-1220',
              sec: '03',
              rem: 19,
              title: 'It & Society',
              instructor: 'Katherine Anne Tyrol'
            },
            '93683': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'ITWS-4500',
              sec: '02',
              rem: 45,
              title: 'Web Science Systems Dev',
              instructor: 'Brian Robert Callahan'
            },
            '93684': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'ITWS-4600',
              sec: '02',
              rem: 5,
              title: 'Data Analytics',
              instructor: 'Thilanka Munasinghe'
            },
            '93695': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'ITWS-4310',
              sec: '01',
              rem: 30,
              title: 'Managing It Resources',
              instructor: 'Matthew John Grill'
            },
            '94240': {
              daysTimes: [ [ 'W', { start: 1200, end: 1450 } ] ],
              id: 'ITWS-6440',
              sec: '01',
              rem: 30,
              title: 'Big Data Policy',
              instructor: 'Kathleen Sturey Fontaine'
            },
            '94576': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ITWS-4960',
              sec: '01',
              rem: 25,
              title: 'Ethical Informatics',
              instructor: 'Kathleen Sturey Fontaine'
            },
            '94618': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'ITWS-2210',
              sec: '01',
              rem: 100,
              title: 'Introduction To Hci',
              instructor: 'TBA'
            },
            '94632': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'ITWS-1100',
              sec: '02',
              rem: 0,
              title: 'Intro To It & Web Science',
              instructor: 'Richard M. Plotka'
            },
            '94805': {
              daysTimes: [ [ 'W', { start: 1400, end: 1650 } ] ],
              id: 'ITWS-6700',
              sec: '01',
              rem: 24,
              title: 'Software Development',
              instructor: 'Richard M. Plotka'
            },
            '94807': {
              daysTimes: [
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'ITWS-6960',
              sec: '01',
              rem: 10,
              title: 'Platform Bus. For Eng. & Sci.',
              instructor: 'Kevin R. Stewart'
            }
          },
          IENV: {
            '93963': {
              daysTimes: [ [ 'M', { start: 1400, end: 1650 } ] ],
              id: 'IENV-1910',
              sec: '01',
              rem: 20,
              title: 'Environmental Seminar',
              instructor: 'Sarah Beth Cadieux'
            }
          },
          IHSS: {
            '94864': {
              daysTimes: [ [ 'R', { start: 1600, end: 1750 } ] ],
              id: 'IHSS-6960',
              sec: '01',
              rem: 19,
              title: 'Digital Rhetoic',
              instructor: 'Leah Corinne Jones'
            }
          },
          ISCI: {
            '90536': {
              daysTimes: [],
              id: 'ISCI-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Chaitanya Kishore Ullal'
            },
            '91073': {
              daysTimes: [],
              id: 'ISCI-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Richard M. Plotka'
            },
            '92197': {
              daysTimes: [],
              id: 'ISCI-9990',
              sec: '05',
              rem: 5,
              title: 'Dissertation',
              instructor: 'Gyorgy Korniss'
            },
            '92257': {
              daysTimes: [],
              id: 'ISCI-9990',
              sec: '06',
              rem: 5,
              title: 'Dissertation',
              instructor: 'Karyn Lynne Rogers'
            },
            '92262': {
              daysTimes: [],
              id: 'ISCI-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Sibel Adali'
            },
            '92313': {
              daysTimes: [],
              id: 'ISCI-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '93471': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'ISCI-1600',
              sec: '01',
              rem: 0,
              title: 'Materials Science',
              instructor: 'TBA'
            },
            '93474': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'ISCI-1600',
              sec: '02',
              rem: 5,
              title: 'Materials Science',
              instructor: 'John R. LaGraff, Chaitanya Kishore Ullal'
            },
            '93477': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'ISCI-1600',
              sec: '03',
              rem: 5,
              title: 'Materials Science',
              instructor: 'Ravishankar Sundararaman, John R. LaGraff, Chaitanya Kishore Ullal'
            },
            '93480': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'ISCI-1600',
              sec: '04',
              rem: 5,
              title: 'Materials Science',
              instructor: 'Wei Bao, John R. LaGraff, Chaitanya Kishore Ullal'
            },
            '93732': {
              daysTimes: [ [ 'R', { start: 1200, end: 1350 } ] ],
              id: 'ISCI-4510',
              sec: '01',
              rem: 15,
              title: 'Rdgs Astrobio & Orig Of Life',
              instructor: 'Morgan Frederick Schaller, Kristin Nicole Johnson'
            },
            '94410': {
              daysTimes: [],
              id: 'ISCI-4610',
              sec: '01',
              rem: 10,
              title: 'Capstone In Astrobiology',
              instructor: 'Karyn Lynne Rogers'
            },
            '94411': {
              daysTimes: [],
              id: 'ISCI-4610',
              sec: '02',
              rem: 10,
              title: 'Capstone In Astrobiology',
              instructor: 'Jacob Thomas Shelley'
            },
            '94470': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'ISCI-1510',
              sec: '01',
              rem: 25,
              title: 'Intro To Astrobiology',
              instructor: 'Andrew Steele, Karyn Lynne Rogers'
            },
            '94519': {
              daysTimes: [ [ 'R', { start: 1200, end: 1350 } ] ],
              id: 'ISCI-6510',
              sec: '01',
              rem: 24,
              title: 'Readings In Astrobiology',
              instructor: 'Morgan Frederick Schaller, Kristin Nicole Johnson'
            },
            '94728': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'ISCI-4961',
              sec: '01',
              rem: 100,
              title: 'Fab Tech f Semiconductor Mfg',
              instructor: 'Jianqiang Lu'
            },
            '94729': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'ISCI-6961',
              sec: '01',
              rem: 100,
              title: 'Fab Tech f Semiconductor Mfg',
              instructor: 'Jianqiang Lu'
            }
          },
          LANG: {
            '92460': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'LANG-1410',
              sec: '01',
              rem: 10,
              title: 'Chinese I',
              instructor: 'Jianling Yue'
            },
            '93172': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'LANG-1410',
              sec: '02',
              rem: 9,
              title: 'Chinese I',
              instructor: 'Jianling Yue'
            },
            '93173': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'LANG-4470',
              sec: '01',
              rem: 19,
              title: 'Chinese V',
              instructor: 'Yalun Zhou'
            },
            '93211': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'LANG-2410',
              sec: '01',
              rem: 19,
              title: 'Chinese II',
              instructor: 'Jianling Yue'
            },
            '93999': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'LANG-4420',
              sec: '01',
              rem: 19,
              title: 'Chinese III',
              instructor: 'Jianling Yue'
            },
            '94895': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'LANG-1410',
              sec: '03',
              rem: 19,
              title: 'Chinese I',
              instructor: 'Yalun Zhou'
            }
          },
          LGHT: {
            '94857': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'LGHT-6760',
              sec: '01',
              rem: 15,
              title: 'Lighting Workshop',
              instructor: 'Jean Paul Freyssinier, Ukwatte Lokuliyanage Indika Upendra Perera'
            },
            '94859': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'LGHT-6780',
              sec: '01',
              rem: 15,
              title: 'Lighting Leadership Seminar',
              instructor: 'TBA'
            },
            '94860': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'LGHT-4770',
              sec: '01',
              rem: 15,
              title: 'Lighting Technologies And Applications',
              instructor: 'Jean Paul Freyssinier'
            },
            '94861': {
              daysTimes: [],
              id: 'LGHT-6980',
              sec: '01',
              rem: 15,
              title: "Master's Project",
              instructor: 'Jean Paul Freyssinier, Ukwatte Lokuliyanage Indika Upendra Perera'
            }
          },
          LITR: {
            '92975': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'LITR-2110',
              sec: '01',
              rem: 19,
              title: 'Intro To Literature',
              instructor: 'Mitchell Ryan Murray'
            },
            '94216': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'LITR-4770',
              sec: '01',
              rem: 19,
              title: 'Women Writers',
              instructor: 'Skye Anicca'
            },
            '94508': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'LITR-2110',
              sec: '02',
              rem: 19,
              title: 'Intro To Literature',
              instructor: 'Mitchell Ryan Murray'
            },
            '94509': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'LITR-4230',
              sec: '01',
              rem: 19,
              title: 'Irish Literature',
              instructor: 'June Deery'
            },
            '94609': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'LITR-2960',
              sec: '01',
              rem: 19,
              title: 'Victorian Literature & Tech',
              instructor: 'Miles A Kimball'
            },
            '94883': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'LITR-4150',
              sec: '01',
              rem: 19,
              title: 'Science And Fiction',
              instructor: 'June Deery'
            },
            '94884': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'LITR-2960',
              sec: '02',
              rem: 19,
              title: 'Victorian Literature & Tech',
              instructor: 'Miles A Kimball'
            },
            '94885': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'LITR-2961',
              sec: '01',
              rem: 19,
              title: 'The Graphic Novel',
              instructor: 'Mitchell Ryan Murray'
            }
          },
          MGMT: {
            '90002': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'MGMT-2300',
              sec: '02',
              rem: 40,
              title: 'Financial Acctg In Digital Age',
              instructor: 'Jamshed Jal Mistry'
            },
            '90010': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'MGMT-4490',
              sec: '01',
              rem: 45,
              title: 'Adv Strat & Promotions',
              instructor: 'Sarah Kathleen Ward'
            },
            '90011': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MGMT-2320',
              sec: '01',
              rem: 50,
              title: 'Managerial Finance',
              instructor: 'Johan Maharjan'
            },
            '90013': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MGMT-1100',
              sec: '01',
              rem: 45,
              title: 'Management In The Digital Age',
              instructor: 'Margaret A McDermott'
            },
            '90014': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'MGMT-1260',
              sec: '01',
              rem: 40,
              title: 'Business Law And Ethics',
              instructor: 'Tanya Singh'
            },
            '90086': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MGMT-1100',
              sec: '02',
              rem: 45,
              title: 'Management In The Digital Age',
              instructor: 'Kevin Albro Fletcher'
            },
            '90092': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MGMT-4860',
              sec: '01',
              rem: 40,
              title: 'Hr Resources In High Perf Orgs',
              instructor: 'Timothy D. Golden'
            },
            '90126': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MGMT-4850',
              sec: '01',
              rem: 55,
              title: 'Org Behavior In High Perf Org',
              instructor: 'Kevin Albro Fletcher'
            },
            '90177': {
              daysTimes: [],
              id: 'MGMT-6990',
              sec: '01',
              rem: 200,
              title: 'Management Thesis',
              instructor: 'TBA'
            },
            '90178': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Gaurav Jain'
            },
            '90179': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '06',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jason Nicholas Kuruzovich'
            },
            '90224': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MGMT-4110',
              sec: '01',
              rem: 40,
              title: 'Operations Management',
              instructor: 'Christopher McDermott'
            },
            '90225': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MGMT-4140',
              sec: '01',
              rem: 40,
              title: 'Computer Info Systems',
              instructor: 'TBA'
            },
            '90226': {
              daysTimes: [ [ 'T', { start: 800, end: 950 } ] ],
              id: 'MGMT-1250',
              sec: '01',
              rem: 40,
              title: 'Management Professional Development II',
              instructor: 'Christine M Allard'
            },
            '90227': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'MGMT-1250',
              sec: '02',
              rem: 40,
              title: 'Management Professional Development II',
              instructor: 'Christine M Allard'
            },
            '90238': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MGMT-2100',
              sec: '01',
              rem: 40,
              title: 'Statistical Methods',
              instructor: 'Raffi Enmanuel Garcia'
            },
            '90405': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MGMT-4100',
              sec: '01',
              rem: 40,
              title: 'Quantitative Methods For Bus',
              instructor: 'Mert Hakan Hekimoglu'
            },
            '90406': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MGMT-4110',
              sec: '02',
              rem: 40,
              title: 'Operations Management',
              instructor: 'Christopher McDermott'
            },
            '90407': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MGMT-4520',
              sec: '01',
              rem: 45,
              title: 'Intro To Tech Entrepreneurship',
              instructor: 'M.V. Shyam Kumar'
            },
            '90415': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '10',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Sebastian Souyris'
            },
            '90416': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '11',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Nishtha Langer'
            },
            '90470': {
              daysTimes: [],
              id: 'MGMT-2940',
              sec: '00',
              rem: 0,
              title: 'Readings In Mgmt',
              instructor: ''
            },
            '90472': {
              daysTimes: [],
              id: 'MGMT-6940',
              sec: '00',
              rem: 0,
              title: 'Readings In Mgmt',
              instructor: ''
            },
            '90497': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Raffi Enmanuel Garcia'
            },
            '90523': {
              daysTimes: [ [ 'W', { start: 1400, end: 1550 } ] ],
              id: 'MGMT-7240',
              sec: '01',
              rem: 55,
              title: 'Professional Development Workshop II',
              instructor: 'Jonathan Alexis McKinney'
            },
            '91001': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Aparna Gupta'
            },
            '91060': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'MGMT-6540',
              sec: '01',
              rem: 40,
              title: 'Marketing Comm & Promo Strat',
              instructor: 'Sarah Kathleen Ward'
            },
            '91261': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'MGMT-4870',
              sec: '01',
              rem: 50,
              title: 'Strategy And Policy',
              instructor: 'Murali Dharan Raman Chari'
            },
            '91270': {
              daysTimes: [
                [ 'T', { start: 1800, end: 1920 } ],
                [ 'F', { start: 1800, end: 1920 } ]
              ],
              id: 'MGMT-6140',
              sec: '01',
              rem: 40,
              title: 'Manage Digitization & Transfrm',
              instructor: 'TBA'
            },
            '91342': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MGMT-4170',
              sec: '01',
              rem: 60,
              title: 'Data Resource Management',
              instructor: 'Jonathan Alexis McKinney'
            },
            '91423': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '07',
              rem: 15,
              title: 'Dissertation',
              instructor: 'Bill Francis'
            },
            '91727': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '09',
              rem: 10,
              title: 'Dissertation',
              instructor: 'M.V. Shyam Kumar'
            },
            '91893': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '13',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Christopher McDermott'
            },
            '92045': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'MGMT-6020',
              sec: '01',
              rem: 55,
              title: 'Financial Management I',
              instructor: 'Bill Francis'
            },
            '92072': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '17',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Murali Dharan Raman Chari'
            },
            '92121': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '18',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '92211': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '14',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '92222': {
              daysTimes: [
                [ 'M', { start: 1800, end: 1920 } ],
                [ 'R', { start: 1800, end: 1920 } ]
              ],
              id: 'MGMT-6410',
              sec: '01',
              rem: 30,
              title: 'Quantitative Asset Management',
              instructor: 'Johan Maharjan'
            },
            '92331': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MGMT-4450',
              sec: '01',
              rem: 50,
              title: 'Internet Marketing',
              instructor: 'Margaret A McDermott'
            },
            '92332': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MGMT-6430',
              sec: '01',
              rem: 40,
              title: 'Advanced Financial Statement Analysis',
              instructor: 'Meimuneh Sumadi'
            },
            '92333': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MGMT-6620',
              sec: '01',
              rem: 45,
              title: 'Technol Entrepreneurship',
              instructor: 'M.V. Shyam Kumar'
            },
            '92352': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MGMT-2300',
              sec: '01',
              rem: 40,
              title: 'Financial Acctg In Digital Age',
              instructor: 'Jamshed Jal Mistry'
            },
            '92367': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Thiagarajan Ravichandran'
            },
            '92380': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MGMT-6720',
              sec: '01',
              rem: 50,
              title: 'Internet Marketing',
              instructor: 'Margaret A McDermott'
            },
            '92409': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '12',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Mert Hakan Hekimoglu'
            },
            '92415': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '15',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Lydia Manikonda'
            },
            '92630': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MGMT-2430',
              sec: '01',
              rem: 40,
              title: 'Marketing Principles',
              instructor: 'Gaurav Jain'
            },
            '92631': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MGMT-2430',
              sec: '02',
              rem: 40,
              title: 'Marketing Principles',
              instructor: 'Gaurav Jain'
            },
            '92973': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MGMT-1260',
              sec: '02',
              rem: 40,
              title: 'Business Law And Ethics',
              instructor: 'Tanya Singh'
            },
            '93154': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MGMT-4150',
              sec: '01',
              rem: 30,
              title: 'It Project Management',
              instructor: 'Jonathan Alexis McKinney'
            },
            '93155': {
              daysTimes: [
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'MGMT-6160',
              sec: '01',
              rem: 60,
              title: 'App Analytics & Pred Modeling',
              instructor: 'Lydia Manikonda'
            },
            '93157': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ]
              ],
              id: 'MGMT-6690',
              sec: '01',
              rem: 40,
              title: 'Negotiation',
              instructor: 'Timothy D. Golden'
            },
            '93159': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'MGMT-7780',
              sec: '01',
              rem: 50,
              title: 'Professional Development Workshop II - Ms',
              instructor: 'Jonathan Alexis McKinney'
            },
            '93160': {
              daysTimes: [ [ 'W', { start: 1400, end: 1550 } ] ],
              id: 'MGMT-7780',
              sec: '02',
              rem: 15,
              title: 'Professional Development Workshop II - Ms',
              instructor: 'Jonathan Alexis McKinney'
            },
            '93388': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MGMT-1100',
              sec: '03',
              rem: 45,
              title: 'Management In The Digital Age',
              instructor: 'Brett Orzechowski'
            },
            '93389': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MGMT-2100',
              sec: '02',
              rem: 40,
              title: 'Statistical Methods',
              instructor: 'Raffi Enmanuel Garcia'
            },
            '93390': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MGMT-2510',
              sec: '01',
              rem: 40,
              title: 'Intro To Data Mgmt & Analytics',
              instructor: 'Jonathan Alexis McKinney'
            },
            '93391': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'MGMT-4100',
              sec: '02',
              rem: 40,
              title: 'Quantitative Methods For Bus',
              instructor: 'Mert Hakan Hekimoglu'
            },
            '93392': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MGMT-6560',
              sec: '01',
              rem: 45,
              title: 'Introduction To Machine Learning Applications',
              instructor: 'Lydia Manikonda'
            },
            '93427': {
              daysTimes: [ [ 'W', { start: 1100, end: 1150 } ] ],
              id: 'MGMT-4961',
              sec: '01',
              rem: 20,
              title: 'Engineering, Science & Mgmt',
              instructor: 'Margaret A McDermott'
            },
            '93667': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MGMT-6570',
              sec: '01',
              rem: 60,
              title: 'Adv Data Resource Management',
              instructor: 'Jonathan Alexis McKinney'
            },
            '93723': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'MGMT-4965',
              sec: '01',
              rem: 40,
              title: 'Financial Technologies',
              instructor: 'TBA'
            },
            '93724': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'MGMT-6965',
              sec: '01',
              rem: 40,
              title: 'Financial Technologies',
              instructor: 'TBA'
            },
            '93886': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'MGMT-7760',
              sec: '01',
              rem: 30,
              title: 'Risk Analytics And Management',
              instructor: 'TBA'
            },
            '93913': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ]
              ],
              id: 'MGMT-6962',
              sec: '01',
              rem: 30,
              title: 'Adv Ai/machine Learn For Fin',
              instructor: 'Brian John Clark'
            },
            '94227': {
              daysTimes: [
                [ 'M', { start: 1800, end: 1950 } ],
                [ 'R', { start: 1800, end: 1950 } ]
              ],
              id: 'MGMT-4160',
              sec: '01',
              rem: 60,
              title: 'Appl Analy & Predictive Mod',
              instructor: 'Lydia Manikonda'
            },
            '94228': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MGMT-4260',
              sec: '01',
              rem: 40,
              title: 'Financial Statement Analysis',
              instructor: 'Meimuneh Sumadi'
            },
            '94229': {
              daysTimes: [
                [ 'M', { start: 800, end: 920 } ],
                [ 'R', { start: 800, end: 920 } ]
              ],
              id: 'MGMT-6100',
              sec: '01',
              rem: 40,
              title: 'Foundations Of Data Science',
              instructor: 'Sebastian Souyris'
            },
            '94231': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MGMT-6420',
              sec: '01',
              rem: 40,
              title: 'Student Managed Invest Fund',
              instructor: 'Meimuneh Sumadi'
            },
            '94232': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'MGMT-6510',
              sec: '01',
              rem: 40,
              title: 'Financial Computation & Simul',
              instructor: 'Brian John Clark'
            },
            '94233': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'MGMT-7030',
              sec: '01',
              rem: 55,
              title: 'Strategy, Tech & Competition I',
              instructor: 'Murali Dharan Raman Chari'
            },
            '94238': {
              daysTimes: [ [ 'M', { start: 1800, end: 2040 } ] ],
              id: 'MGMT-6580',
              sec: '01',
              rem: 55,
              title: 'Marketing High - Tech Prod',
              instructor: 'Sarah Kathleen Ward'
            },
            '94246': {
              daysTimes: [ [ 'W', { start: 1800, end: 2150 } ] ],
              id: 'MGMT-4963',
              sec: '01',
              rem: 30,
              title: 'Sport Marketing',
              instructor: "John D'Argenio"
            },
            '94333': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MGMT-6600',
              sec: '01',
              rem: 15,
              title: 'Data Analytics',
              instructor: 'Thilanka Munasinghe'
            },
            '94334': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MGMT-6600',
              sec: '02',
              rem: 10,
              title: 'Data Analytics',
              instructor: 'Thilanka Munasinghe'
            },
            '94349': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MGMT-4420',
              sec: '01',
              rem: 40,
              title: 'Student Managed Invest Fund',
              instructor: 'Meimuneh Sumadi'
            },
            '94401': {
              daysTimes: [ [ 'T', { start: 1630, end: 1800 } ] ],
              id: 'MGMT-6961',
              sec: '01',
              rem: 15,
              title: 'Protecting & Commercializing Y',
              instructor: 'Aparna Gupta'
            },
            '94427': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MGMT-6630',
              sec: '01',
              rem: 30,
              title: 'Starting Up A New Venture',
              instructor: 'Jason Nicholas Kuruzovich'
            },
            '94428': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MGMT-4530',
              sec: '01',
              rem: 30,
              title: 'Starting Up A New Venture',
              instructor: 'Jason Nicholas Kuruzovich'
            },
            '94432': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'MGMT-6100',
              sec: '02',
              rem: 40,
              title: 'Foundations Of Data Science',
              instructor: 'Sebastian Souyris'
            },
            '94434': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'MGMT-2300',
              sec: '03',
              rem: 40,
              title: 'Financial Acctg In Digital Age',
              instructor: 'Jamshed Jal Mistry'
            },
            '94440': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'MGMT-6511',
              sec: '01',
              rem: 25,
              title: 'Prac Life Sciences Entreprnshp',
              instructor: 'Brett Orzechowski'
            },
            '94441': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ]
              ],
              id: 'MGMT-6445',
              sec: '01',
              rem: 30,
              title: 'Business Capstone',
              instructor: 'Jason Nicholas Kuruzovich'
            },
            '94442': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ]
              ],
              id: 'MGMT-6445',
              sec: '02',
              rem: 30,
              title: 'Business Capstone',
              instructor: 'Thiagarajan Ravichandran'
            },
            '94636': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Timothy D. Golden'
            },
            '94662': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MGMT-1100',
              sec: '04',
              rem: 45,
              title: 'Management In The Digital Age',
              instructor: 'M.V. Shyam Kumar'
            },
            '94672': {
              daysTimes: [],
              id: 'MGMT-9990',
              sec: '08',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Brian John Clark'
            },
            '94691': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MGMT-4190',
              sec: '01',
              rem: 45,
              title: 'Intro To Machine Learning Apps',
              instructor: 'Lydia Manikonda'
            },
            '94727': {
              daysTimes: [],
              id: 'MGMT-4800',
              sec: '01',
              rem: 30,
              title: 'Business Ug Internship',
              instructor: 'Kevin Albro Fletcher'
            },
            '94749': {
              daysTimes: [],
              id: 'MGMT-4962',
              sec: '01',
              rem: 30,
              title: 'Engineering, Science & Mgmt',
              instructor: ''
            },
            '94754': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MGMT-4090',
              sec: '01',
              rem: 40,
              title: 'Negotiations',
              instructor: 'Timothy D. Golden'
            }
          },
          MTLE: {
            '90039': {
              daysTimes: [ [ 'W', { start: 1030, end: 1230 } ] ],
              id: 'MTLE-6900',
              sec: '01',
              rem: 45,
              title: 'Graduate Seminar',
              instructor: 'Edwin B. Fohtung'
            },
            '90180': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Rahmi Ozisik'
            },
            '90181': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Wei Bao'
            },
            '90182': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ganpati Ramanath'
            },
            '90183': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90184': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Yunfeng Shi'
            },
            '90214': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '11',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Paul George Keblinski'
            },
            '90215': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '13',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90266': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '05',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Minoru Tomozawa'
            },
            '90274': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '14',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Daniel Gall'
            },
            '90417': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '16',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Chaitanya Kishore Ullal'
            },
            '90500': {
              daysTimes: [],
              id: 'MTLE-6980',
              sec: '13',
              rem: 10,
              title: "Master's Project",
              instructor: 'Wei Bao'
            },
            '90502': {
              daysTimes: [],
              id: 'MTLE-6980',
              sec: '02',
              rem: 20,
              title: "Master's Project",
              instructor: 'Rahmi Ozisik'
            },
            '91061': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'T', { start: -1, end: -1 } ],
                [ 'W', { start: -1, end: -1 } ],
                [ 'R', { start: -1, end: -1 } ]
              ],
              id: 'MTLE-6300',
              sec: '01',
              rem: 10,
              title: 'Ic Fabrication Lab',
              instructor: 'Jianqiang Lu'
            },
            '91068': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '16',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Edwin B. Fohtung'
            },
            '91069': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '20',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Chaitanya Kishore Ullal'
            },
            '91075': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '19',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Daniel J. Lewis'
            },
            '91089': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '08',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Daniel J. Lewis'
            },
            '91276': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MTLE-6060',
              sec: '01',
              rem: 25,
              title: 'Adv Kinetics Of Matl Reactions',
              instructor: 'Yunfeng Shi'
            },
            '91291': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '06',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Liping Huang'
            },
            '91335': {
              daysTimes: [],
              id: 'MTLE-6980',
              sec: '01',
              rem: 25,
              title: "Master's Project",
              instructor: 'Daniel J. Lewis'
            },
            '91418': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '10',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Minoru Tomozawa'
            },
            '91484': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '01',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Robert Hull'
            },
            '91485': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Robert Hull'
            },
            '91486': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '02',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Liping Huang'
            },
            '91487': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '03',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Yunfeng Shi'
            },
            '91825': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '14',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Daniel Gall'
            },
            '92046': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'MTLE-4910',
              sec: '01',
              rem: 28,
              title: 'Materials Selection',
              instructor: 'Daniel J. Lewis'
            },
            '92088': {
              daysTimes: [],
              id: 'MTLE-6980',
              sec: '04',
              rem: 10,
              title: "Master's Project",
              instructor: 'Robert Hull'
            },
            '92122': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '15',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Paul George Keblinski'
            },
            '92123': {
              daysTimes: [],
              id: 'MTLE-6980',
              sec: '15',
              rem: 10,
              title: "Master's Project",
              instructor: 'Paul George Keblinski'
            },
            '92159': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '06',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Wei Bao'
            },
            '92231': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MTLE-4920',
              sec: '01',
              rem: 0,
              title: 'Multidisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Junichi Kanai, Rahmi Ozisik'
            },
            '92232': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MTLE-4920',
              sec: '03',
              rem: 0,
              title: 'Multidisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Junichi Kanai, Rahmi Ozisik'
            },
            '92233': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MTLE-4920',
              sec: '04',
              rem: 0,
              title: 'Multidisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Junichi Kanai, Rahmi Ozisik'
            },
            '92269': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '10',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Vincent Meunier'
            },
            '92270': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '11',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Christian M. Wetzel'
            },
            '92271': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '12',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Jie Lian'
            },
            '92273': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '18',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Christian M. Wetzel'
            },
            '92274': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '19',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jie Lian'
            },
            '92276': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '07',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Partha S. Dutta'
            },
            '92290': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '08',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Ganpati Ramanath'
            },
            '92375': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '21',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Nikhil Koratkar'
            },
            '92539': {
              daysTimes: [],
              id: 'MTLE-6980',
              sec: '06',
              rem: 10,
              title: "Master's Project",
              instructor: 'Rahmi Ozisik'
            },
            '92640': {
              daysTimes: [],
              id: 'MTLE-6980',
              sec: '07',
              rem: 10,
              title: "Master's Project",
              instructor: 'Jian Shi'
            },
            '92641': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '17',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Jian Shi'
            },
            '92642': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '22',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jian Shi'
            },
            '92643': {
              daysTimes: [],
              id: 'MTLE-6980',
              sec: '08',
              rem: 10,
              title: "Master's Project",
              instructor: 'Edmund Francis Palermo'
            },
            '92644': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '18',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Edmund Francis Palermo'
            },
            '92645': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '23',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Edmund Francis Palermo'
            },
            '92992': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MTLE-2100',
              sec: '01',
              rem: 50,
              title: 'Struc Of Engr Materials',
              instructor: 'Edwin B. Fohtung'
            },
            '93011': {
              daysTimes: [],
              id: 'MTLE-6980',
              sec: '05',
              rem: 10,
              title: "Master's Project",
              instructor: 'Daniel Gall'
            },
            '93139': {
              daysTimes: [],
              id: 'MTLE-6980',
              sec: '10',
              rem: 10,
              title: "Master's Project",
              instructor: 'Edwin B. Fohtung'
            },
            '93405': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MTLE-4200',
              sec: '01',
              rem: 30,
              title: 'Elictrical And Optical Properties Of Materials',
              instructor: 'Daniel Gall'
            },
            '93456': {
              daysTimes: [],
              id: 'MTLE-6980',
              sec: '11',
              rem: 10,
              title: "Master's Project",
              instructor: 'Ravishankar Sundararaman'
            },
            '93457': {
              daysTimes: [],
              id: 'MTLE-6990',
              sec: '04',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Ravishankar Sundararaman'
            },
            '93458': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '09',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ravishankar Sundararaman'
            },
            '93539': {
              daysTimes: [],
              id: 'MTLE-6980',
              sec: '12',
              rem: 10,
              title: "Master's Project",
              instructor: 'Chaitanya Kishore Ullal'
            },
            '93670': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'MTLE-4100',
              sec: '01',
              rem: 35,
              title: 'Thermodynamics Of Materials',
              instructor: 'Rahmi Ozisik'
            },
            '93899': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'W', { start: 900, end: 1250 } ]
              ],
              id: 'MTLE-4400',
              sec: '01',
              rem: 10,
              title: 'Synthesis And Processing',
              instructor: 'Chaitanya Kishore Ullal'
            },
            '93900': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1400, end: 1750 } ]
              ],
              id: 'MTLE-4400',
              sec: '02',
              rem: 10,
              title: 'Synthesis And Processing',
              instructor: 'Chaitanya Kishore Ullal'
            },
            '93964': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MTLE-4960',
              sec: '01',
              rem: 40,
              title: 'Biological Materials',
              instructor: 'Edmund Francis Palermo'
            },
            '93980': {
              daysTimes: [],
              id: 'MTLE-6980',
              sec: '03',
              rem: 1,
              title: "Master's Project",
              instructor: 'Minoru Tomozawa'
            },
            '94614': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '24',
              rem: 5,
              title: 'Dissertation',
              instructor: 'Sufei Shi'
            },
            '94615': {
              daysTimes: [],
              id: 'MTLE-9990',
              sec: '25',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '94690': {
              daysTimes: [],
              id: 'MTLE-6970',
              sec: '01',
              rem: 10,
              title: 'Masters Professional Project',
              instructor: 'Rahmi Ozisik'
            },
            '94745': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1450 } ],
                [ 'R', { start: 1400, end: 1450 } ]
              ],
              id: 'MTLE-4250',
              sec: '1',
              rem: 20,
              title: 'Mechanical Properties Of Materials',
              instructor: 'Rahmi Ozisik'
            },
            '94751': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1450 } ],
                [ 'R', { start: 1400, end: 1450 } ]
              ],
              id: 'MTLE-4430',
              sec: '1',
              rem: 20,
              title: 'Fundamental Of Metallurgical Alloy Systems',
              instructor: 'Daniel J. Lewis'
            },
            '94753': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MTLE-6120',
              sec: '1',
              rem: 15,
              title: 'Advanced Electronic Properties',
              instructor: 'Edwin B. Fohtung'
            },
            '94755': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ]
              ],
              id: 'MTLE-6960',
              sec: '01',
              rem: 40,
              title: 'Biological Materials',
              instructor: 'Edmund Francis Palermo'
            },
            '94935': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1450 } ],
                [ 'R', { start: 1400, end: 1450 } ]
              ],
              id: 'MTLE-2040',
              sec: '01',
              rem: 25,
              title: 'Programming For Engineers',
              instructor: 'Yunfeng Shi'
            }
          },
          MATP: {
            '90022': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MATP-4820',
              sec: '01',
              rem: 50,
              title: 'Computational Optimization',
              instructor: 'Yangyang Xu'
            },
            '90401': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MATP-6610',
              sec: '01',
              rem: 50,
              title: 'Computational Optimization',
              instructor: 'Yangyang Xu'
            },
            '93170': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ],
                [ 'W', { start: 900, end: 950 } ]
              ],
              id: 'MATP-4400',
              sec: '01',
              rem: 30,
              title: 'Intro To Data Mathematics',
              instructor: 'Kristin P Bennett'
            },
            '93171': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ],
                [ 'W', { start: 1000, end: 1050 } ]
              ],
              id: 'MATP-4400',
              sec: '02',
              rem: 30,
              title: 'Intro To Data Mathematics',
              instructor: 'Kristin P Bennett'
            },
            '94772': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MATP-6640',
              sec: '01',
              rem: 25,
              title: 'Linear And Conic Optimization',
              instructor: 'John E. Mitchell'
            }
          },
          MATH: {
            '90023': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-4300',
              sec: '01',
              rem: 60,
              title: 'Intro Complex Var',
              instructor: 'Fengyan Li'
            },
            '90024': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MATH-4500',
              sec: '01',
              rem: 50,
              title: 'Meth Pde Of Math Physics',
              instructor: 'Donald W Schwendeman'
            },
            '90025': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'MATH-4600',
              sec: '01',
              rem: 60,
              title: 'Advanced Calculus',
              instructor: 'Belmiro Galo da Silva'
            },
            '90026': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'T', { start: 1500, end: 1550 } ]
              ],
              id: 'MATH-2400',
              sec: '06',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'Wing Sze E Kam'
            },
            '90027': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1400, end: 1450 } ]
              ],
              id: 'MATH-2400',
              sec: '07',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'Wing Sze E Kam'
            },
            '90028': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1500, end: 1550 } ]
              ],
              id: 'MATH-2400',
              sec: '08',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'Wing Sze E Kam'
            },
            '90029': {
              daysTimes: [
                [ 'M', { start: 800, end: 850 } ],
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'MATH-2400',
              sec: '09',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'TBA'
            },
            '90030': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-1020',
              sec: '13',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Gina Irene Kucinski'
            },
            '90031': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-1020',
              sec: '14',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Gina Irene Kucinski'
            },
            '90032': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'MATH-1020',
              sec: '03',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Margaret Z. Kiehl'
            },
            '90033': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'MATH-1020',
              sec: '04',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Margaret Z. Kiehl'
            },
            '90034': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'MATH-1020',
              sec: '05',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Margaret Z. Kiehl'
            },
            '90035': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'MATH-1020',
              sec: '08',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Margaret Z. Kiehl'
            },
            '90036': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'W', { start: 800, end: 950 } ]
              ],
              id: 'MATH-1010',
              sec: '01',
              rem: 30,
              title: 'Calculus I',
              instructor: 'Kseniya Yevgenyevna Klyachko'
            },
            '90070': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MATH-4800',
              sec: '01',
              rem: 70,
              title: 'Numerical Computing',
              instructor: 'Yuri V Lvov'
            },
            '90071': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ],
                [ 'T', { start: 1400, end: 1450 } ]
              ],
              id: 'MATH-2400',
              sec: '05',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'Wing Sze E Kam'
            },
            '90072': {
              daysTimes: [
                [ 'M', { start: 800, end: 850 } ],
                [ 'T', { start: 1030, end: 1150 } ],
                [ 'F', { start: 1030, end: 1150 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-2010',
              sec: '01',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'TBA'
            },
            '90088': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ],
                [ 'T', { start: 900, end: 950 } ]
              ],
              id: 'MATH-2400',
              sec: '02',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'Wing Sze E Kam'
            },
            '90089': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'MATH-1020',
              sec: '07',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Margaret Z. Kiehl'
            },
            '90095': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-1020',
              sec: '15',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Gina Irene Kucinski'
            },
            '90114': {
              daysTimes: [
                [ 'T', { start: 1030, end: 1150 } ],
                [ 'F', { start: 1030, end: 1150 } ],
                [ 'W', { start: 1000, end: 1150 } ],
                [ 'R', { start: 800, end: 850 } ]
              ],
              id: 'MATH-2010',
              sec: '03',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'Elisabeth Maria Brown'
            },
            '90115': {
              daysTimes: [
                [ 'T', { start: 1030, end: 1150 } ],
                [ 'F', { start: 1030, end: 1150 } ],
                [ 'W', { start: 1000, end: 1150 } ],
                [ 'R', { start: 900, end: 950 } ]
              ],
              id: 'MATH-2010',
              sec: '04',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'Elisabeth Maria Brown'
            },
            '90116': {
              daysTimes: [
                [ 'M', { start: 900, end: 950 } ],
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'MATH-2400',
              sec: '10',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'TBA'
            },
            '90117': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'MATH-4010',
              sec: '01',
              rem: 50,
              title: 'Abstract Algebra',
              instructor: 'Gina Irene Kucinski'
            },
            '90128': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ],
                [ 'R', { start: 800, end: 850 } ]
              ],
              id: 'MATH-2400',
              sec: '11',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'Daniel Franklin Stevenson'
            },
            '90185': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Yuri V Lvov'
            },
            '90234': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-1020',
              sec: '16',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Gina Irene Kucinski'
            },
            '90235': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'MATH-1020',
              sec: '17',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Kseniya Yevgenyevna Klyachko'
            },
            '90236': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'MATH-1020',
              sec: '18',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Kseniya Yevgenyevna Klyachko'
            },
            '90237': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ],
                [ 'T', { start: 800, end: 850 } ]
              ],
              id: 'MATH-2400',
              sec: '01',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'Wing Sze E Kam'
            },
            '90248': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90299': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'W', { start: 800, end: 950 } ]
              ],
              id: 'MATH-1010',
              sec: '02',
              rem: 30,
              title: 'Calculus I',
              instructor: 'Kseniya Yevgenyevna Klyachko'
            },
            '90302': {
              daysTimes: [
                [ 'M', { start: 1500, end: 1550 } ],
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ]
              ],
              id: 'MATH-2400',
              sec: '14',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'TBA'
            },
            '90353': {
              daysTimes: [ [ 'W', { start: 1600, end: 1650 } ] ],
              id: 'MATH-6951',
              sec: '01',
              rem: 25,
              title: 'Intro. To Research In Math',
              instructor: 'TBA'
            },
            '90397': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'MATH-1020',
              sec: '01',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Margaret Z. Kiehl'
            },
            '90398': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'MATH-1020',
              sec: '02',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Margaret Z. Kiehl'
            },
            '90399': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ],
                [ 'F', { start: 800, end: 850 } ]
              ],
              id: 'MATH-2400',
              sec: '03',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'Wing Sze E Kam'
            },
            '90400': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ],
                [ 'F', { start: 900, end: 950 } ]
              ],
              id: 'MATH-2400',
              sec: '04',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'Wing Sze E Kam'
            },
            '90421': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '13',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90424': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '15',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90425': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '16',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Kristin P Bennett'
            },
            '90426': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '24',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Peter R Kramer'
            },
            '90476': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '10',
              rem: 10,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90484': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '17',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Chjan C Lim'
            },
            '90636': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '23',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Gregor Kovacic'
            },
            '91051': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'MATH-1020',
              sec: '06',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Margaret Z. Kiehl'
            },
            '91052': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ],
                [ 'R', { start: 900, end: 950 } ]
              ],
              id: 'MATH-2400',
              sec: '12',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'Daniel Franklin Stevenson'
            },
            '91085': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '21',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Mark H Holmes'
            },
            '91122': {
              daysTimes: [],
              id: 'MATH-6980',
              sec: '01',
              rem: 10,
              title: "Master's Project",
              instructor: 'Kristin P Bennett'
            },
            '91268': {
              daysTimes: [
                [ 'T', { start: 1230, end: 1350 } ],
                [ 'F', { start: 1230, end: 1350 } ],
                [ 'W', { start: 900, end: 950 } ]
              ],
              id: 'MATH-4090',
              sec: '01',
              rem: 25,
              title: 'Foundations Of Analysis',
              instructor: 'Margaret Z. Kiehl'
            },
            '91299': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Bruce Piper'
            },
            '91482': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Donald W Schwendeman'
            },
            '91491': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '11',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Fengyan Li'
            },
            '91527': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '12',
              rem: 10,
              title: 'Dissertation',
              instructor: 'John E. Mitchell'
            },
            '91638': {
              daysTimes: [],
              id: 'MATH-6980',
              sec: '03',
              rem: 5,
              title: "Master's Project",
              instructor: 'Yangyang Xu'
            },
            '91844': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'MATH-1020',
              sec: '20',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Kseniya Yevgenyevna Klyachko'
            },
            '91886': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1650 } ],
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'MATH-2010',
              sec: '05',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'TBA'
            },
            '91887': {
              daysTimes: [
                [ 'M', { start: 1700, end: 1750 } ],
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ],
                [ 'W', { start: 1200, end: 1350 } ]
              ],
              id: 'MATH-2010',
              sec: '06',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'TBA'
            },
            '91911': {
              daysTimes: [],
              id: 'MATH-6980',
              sec: '04',
              rem: 5,
              title: "Master's Project",
              instructor: 'David Isaacson'
            },
            '92035': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ],
                [ 'W', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1600, end: 1650 } ]
              ],
              id: 'MATH-2010',
              sec: '07',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'Elisabeth Maria Brown'
            },
            '92042': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ],
                [ 'W', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1700, end: 1750 } ]
              ],
              id: 'MATH-2010',
              sec: '08',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'Elisabeth Maria Brown'
            },
            '92065': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '18',
              rem: 10,
              title: 'Dissertation',
              instructor: 'David Isaacson'
            },
            '92089': {
              daysTimes: [
                [ 'M', { start: 1030, end: 1150 } ],
                [ 'R', { start: 1030, end: 1150 } ],
                [ 'T', { start: 800, end: 850 } ],
                [ 'W', { start: 800, end: 950 } ]
              ],
              id: 'MATH-2010',
              sec: '09',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'Eliane Zerbetto Traldi'
            },
            '92092': {
              daysTimes: [
                [ 'M', { start: 1030, end: 1150 } ],
                [ 'R', { start: 1030, end: 1150 } ],
                [ 'T', { start: 900, end: 950 } ],
                [ 'W', { start: 800, end: 950 } ]
              ],
              id: 'MATH-2010',
              sec: '10',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'Eliane Zerbetto Traldi'
            },
            '92105': {
              daysTimes: [],
              id: 'MATH-6980',
              sec: '05',
              rem: 10,
              title: "Master's Project",
              instructor: 'Mark S Shephard'
            },
            '92207': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ashwani Kumar Kapila'
            },
            '92218': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'MATH-1020',
              sec: '19',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Kseniya Yevgenyevna Klyachko'
            },
            '92219': {
              daysTimes: [
                [ 'M', { start: 1030, end: 1150 } ],
                [ 'R', { start: 1030, end: 1150 } ],
                [ 'W', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 850 } ]
              ],
              id: 'MATH-2010',
              sec: '11',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'Eliane Zerbetto Traldi'
            },
            '92220': {
              daysTimes: [
                [ 'M', { start: 1030, end: 1150 } ],
                [ 'R', { start: 1030, end: 1150 } ],
                [ 'W', { start: 800, end: 950 } ],
                [ 'F', { start: 900, end: 950 } ]
              ],
              id: 'MATH-2010',
              sec: '12',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'Eliane Zerbetto Traldi'
            },
            '92322': {
              daysTimes: [
                [ 'M', { start: 900, end: 950 } ],
                [ 'T', { start: 1030, end: 1150 } ],
                [ 'F', { start: 1030, end: 1150 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-2010',
              sec: '02',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'TBA'
            },
            '92334': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-1020',
              sec: '09',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Gina Irene Kucinski'
            },
            '92335': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-1020',
              sec: '10',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Gina Irene Kucinski'
            },
            '92336': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-1020',
              sec: '11',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Gina Irene Kucinski'
            },
            '92337': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-1020',
              sec: '12',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Gina Irene Kucinski'
            },
            '92560': {
              daysTimes: [],
              id: 'MATH-6980',
              sec: '06',
              rem: 10,
              title: "Master's Project",
              instructor: 'William Douglas Henshaw'
            },
            '92624': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ],
                [ 'T', { start: 1000, end: 1050 } ],
                [ 'W', { start: 1600, end: 1750 } ]
              ],
              id: 'MATH-2010',
              sec: '13',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'Eliane Zerbetto Traldi'
            },
            '92625': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ],
                [ 'T', { start: 1100, end: 1150 } ],
                [ 'W', { start: 1600, end: 1750 } ]
              ],
              id: 'MATH-2010',
              sec: '14',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'Eliane Zerbetto Traldi'
            },
            '92749': {
              daysTimes: [],
              id: 'MATH-6970',
              sec: '02',
              rem: 10,
              title: "Master's Practicum  In Math",
              instructor: 'Bruce Piper'
            },
            '92750': {
              daysTimes: [],
              id: 'MATH-6980',
              sec: '07',
              rem: 10,
              title: "Master's Project",
              instructor: 'Bruce Piper'
            },
            '92774': {
              daysTimes: [],
              id: 'MATH-6970',
              sec: '03',
              rem: 10,
              title: "Master's Practicum  In Math",
              instructor: 'Gregor Kovacic'
            },
            '92972': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1500, end: 1550 } ]
              ],
              id: 'MATH-2400',
              sec: '16',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'Daniel Franklin Stevenson'
            },
            '93025': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '06',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jeffrey William Banks'
            },
            '93035': {
              daysTimes: [],
              id: 'MATH-6990',
              sec: '01',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Jeffrey William Banks'
            },
            '93036': {
              daysTimes: [],
              id: 'MATH-6980',
              sec: '09',
              rem: 10,
              title: "Master's Project",
              instructor: 'Jeffrey William Banks'
            },
            '93161': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'MATH-1020',
              sec: '21',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Kseniya Yevgenyevna Klyachko'
            },
            '93162': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'MATH-1020',
              sec: '22',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Kseniya Yevgenyevna Klyachko'
            },
            '93163': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'MATH-1020',
              sec: '23',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Kseniya Yevgenyevna Klyachko'
            },
            '93164': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'MATH-1020',
              sec: '24',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Kseniya Yevgenyevna Klyachko'
            },
            '93175': {
              daysTimes: [
                [ 'M', { start: 900, end: 950 } ],
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'MATH-1520',
              sec: '01',
              rem: 30,
              title: 'Math Methods In Mgt & Economic',
              instructor: 'TBA'
            },
            '93176': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1050 } ],
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'MATH-1520',
              sec: '02',
              rem: 30,
              title: 'Math Methods In Mgt & Economic',
              instructor: 'TBA'
            },
            '93177': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ],
                [ 'R', { start: 900, end: 950 } ]
              ],
              id: 'MATH-1520',
              sec: '03',
              rem: 30,
              title: 'Math Methods In Mgt & Economic',
              instructor: 'Wing Sze E Kam'
            },
            '93178': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1000, end: 1050 } ]
              ],
              id: 'MATH-1520',
              sec: '04',
              rem: 30,
              title: 'Math Methods In Mgt & Economic',
              instructor: 'Wing Sze E Kam'
            },
            '93232': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '25',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Rongjie Lai'
            },
            '93520': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '08',
              rem: 10,
              title: 'Dissertation',
              instructor: 'William Douglas Henshaw'
            },
            '93644': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1600, end: 1750 } ]
              ],
              id: 'MATH-1020',
              sec: '25',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Belmiro Galo da Silva'
            },
            '93685': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1600, end: 1750 } ]
              ],
              id: 'MATH-1020',
              sec: '26',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Belmiro Galo da Silva'
            },
            '93865': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'MATH-4100',
              sec: '01',
              rem: 70,
              title: 'Linear Algebra',
              instructor: 'Eliane Zerbetto Traldi'
            },
            '93923': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'MATH-4100',
              sec: '02',
              rem: 70,
              title: 'Linear Algebra',
              instructor: 'Bruce Piper'
            },
            '94002': {
              daysTimes: [],
              id: 'MATH-9990',
              sec: '30',
              rem: 20,
              title: 'Dissertation',
              instructor: 'Yangyang Xu'
            },
            '94219': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'W', { start: 800, end: 950 } ]
              ],
              id: 'MATH-1010',
              sec: '03',
              rem: 30,
              title: 'Calculus I',
              instructor: 'Kseniya Yevgenyevna Klyachko'
            },
            '94220': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'W', { start: 800, end: 950 } ]
              ],
              id: 'MATH-1010',
              sec: '04',
              rem: 30,
              title: 'Calculus I',
              instructor: 'Kseniya Yevgenyevna Klyachko'
            },
            '94223': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1600, end: 1750 } ]
              ],
              id: 'MATH-1020',
              sec: '27',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Belmiro Galo da Silva'
            },
            '94239': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1600, end: 1750 } ]
              ],
              id: 'MATH-1020',
              sec: '28',
              rem: 30,
              title: 'Calculus II',
              instructor: 'Belmiro Galo da Silva'
            },
            '94241': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-6840',
              sec: '01',
              rem: 25,
              title: 'Numerical Solutions Of P',
              instructor: 'Jeffrey William Banks'
            },
            '94467': {
              daysTimes: [
                [ 'T', { start: 1230, end: 1350 } ],
                [ 'F', { start: 1230, end: 1350 } ],
                [ 'W', { start: 1000, end: 1050 } ]
              ],
              id: 'MATH-4090',
              sec: '02',
              rem: 25,
              title: 'Foundations Of Analysis',
              instructor: 'Margaret Z. Kiehl'
            },
            '94505': {
              daysTimes: [
                [ 'M', { start: 800, end: 850 } ],
                [ 'T', { start: 830, end: 950 } ],
                [ 'F', { start: 830, end: 950 } ]
              ],
              id: 'MATH-2400',
              sec: '17',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'TBA'
            },
            '94510': {
              daysTimes: [
                [ 'M', { start: 900, end: 950 } ],
                [ 'T', { start: 830, end: 950 } ],
                [ 'F', { start: 830, end: 950 } ]
              ],
              id: 'MATH-2400',
              sec: '18',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'TBA'
            },
            '94511': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ],
                [ 'W', { start: 1600, end: 1750 } ],
                [ 'F', { start: 1000, end: 1050 } ]
              ],
              id: 'MATH-2010',
              sec: '15',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'Eliane Zerbetto Traldi'
            },
            '94512': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ],
                [ 'W', { start: 1600, end: 1750 } ],
                [ 'F', { start: 1100, end: 1150 } ]
              ],
              id: 'MATH-2010',
              sec: '16',
              rem: 30,
              title: 'Multivar Calc & Matrix Alg',
              instructor: 'Eliane Zerbetto Traldi'
            },
            '94513': {
              daysTimes: [
                [ 'T', { start: 830, end: 950 } ],
                [ 'F', { start: 830, end: 950 } ],
                [ 'R', { start: 800, end: 850 } ]
              ],
              id: 'MATH-2400',
              sec: '19',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'Elisabeth Maria Brown'
            },
            '94514': {
              daysTimes: [
                [ 'T', { start: 830, end: 950 } ],
                [ 'F', { start: 830, end: 950 } ],
                [ 'R', { start: 900, end: 950 } ]
              ],
              id: 'MATH-2400',
              sec: '20',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'Elisabeth Maria Brown'
            },
            '94590': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-6590',
              sec: '01',
              rem: 25,
              title: 'Topics In Pde: Randomized Algo',
              instructor: 'Fabian Maximilian Faulstich'
            },
            '94750': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MATH-4120',
              sec: '01',
              rem: 50,
              title: 'Fund Of Geometry',
              instructor: 'Daniel Franklin Stevenson'
            },
            '94765': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-4820',
              sec: '01',
              rem: 50,
              title: 'Intro Numerical Mthd Diff Equ',
              instructor: 'William Douglas Henshaw'
            },
            '94766': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1450 } ],
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ]
              ],
              id: 'MATH-2400',
              sec: '13',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'TBA'
            },
            '94768': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1450 } ]
              ],
              id: 'MATH-2400',
              sec: '15',
              rem: 30,
              title: 'Intro Diff Equations',
              instructor: 'Daniel Franklin Stevenson'
            },
            '94769': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MATH-6620',
              sec: '01',
              rem: 25,
              title: 'Perturbation Methods',
              instructor: 'Mark H Holmes'
            },
            '94770': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'MATH-6660',
              sec: '01',
              rem: 25,
              title: 'Stochastic Processes And Modeling',
              instructor: 'Peter R Kramer'
            },
            '94771': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MATH-6860',
              sec: '01',
              rem: 25,
              title: 'Finite Element Analysis',
              instructor: 'Fengyan Li'
            },
            '94882': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-4150',
              sec: '01',
              rem: 30,
              title: 'Graph Theory',
              instructor: 'George M. Slota'
            },
            '94887': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MATH-4140',
              sec: '01',
              rem: 30,
              title: 'Intermediate Logic',
              instructor: 'Bram Van Heuveln'
            }
          },
          MANE: {
            '90334': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MANE-4260',
              sec: '01',
              rem: 0,
              title: 'Mulitdisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Casey Jay Hoffman, Junichi Kanai, Mark Ernest Vermilyea'
            },
            '90335': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MANE-4260',
              sec: '02',
              rem: 0,
              title: 'Mulitdisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Casey Jay Hoffman, Junichi Kanai, Mark Ernest Vermilyea'
            },
            '90336': {
              daysTimes: [ [ 'F', { start: 1400, end: 1550 } ] ],
              id: 'MANE-4390',
              sec: '01',
              rem: 50,
              title: 'Nuclear Eng Senr Dsgn Proj II',
              instructor: 'Bimal K Malaviya'
            },
            '90339': {
              daysTimes: [
                [ 'M', { start: 830, end: 950 } ],
                [ 'R', { start: 830, end: 950 } ]
              ],
              id: 'MANE-4900',
              sec: '01',
              rem: 100,
              title: 'Aeroelasticity And Structural Vibrations',
              instructor: 'Robert John Niemiec'
            },
            '90340': {
              daysTimes: [ [ 'W', { start: 900, end: 1150 } ] ],
              id: 'MANE-4920',
              sec: '01',
              rem: 30,
              title: 'Aerospace Structures And Control Laboratory',
              instructor: 'Nikhil Koratkar'
            },
            '90354': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'MANE-6900',
              sec: '01',
              rem: 250,
              title: 'Graduate Seminar',
              instructor: 'Shankar Narayan'
            },
            '90355': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '25',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Suvranu De'
            },
            '90356': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Antoinette Maniatty'
            },
            '90357': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Thierry Blanchet'
            },
            '90358': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Fudong Han'
            },
            '90359': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '10',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Kurt S Anderson'
            },
            '90360': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '13',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Amir Hirsa'
            },
            '90361': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '15',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Catalin R Picu'
            },
            '90362': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '25',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Suvranu De'
            },
            '90363': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '31',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Shaowu Pan'
            },
            '90364': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '37',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Li Liu'
            },
            '90365': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '39',
              rem: 0,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90366': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '40',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Theodorian Borca-Tasciuc'
            },
            '90367': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '41',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Nikhil Koratkar'
            },
            '90368': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '44',
              rem: 10,
              title: 'Dissertation',
              instructor: 'John Wen'
            },
            '90375': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '45',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Wei Ji'
            },
            '90390': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '46',
              rem: 0,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '90393': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '47',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Michael Amitay'
            },
            '90440': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MANE-4100',
              sec: '01',
              rem: 100,
              title: 'Spaceflight Mechanics',
              instructor: 'Sandeep Singh'
            },
            '90467': {
              daysTimes: [],
              id: 'MANE-2940',
              sec: '00',
              rem: 0,
              title: 'Readings In Mane',
              instructor: ''
            },
            '90468': {
              daysTimes: [],
              id: 'MANE-6940',
              sec: '00',
              rem: 0,
              title: 'Independent Study In Mane',
              instructor: ''
            },
            '90482': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '47',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Michael Amitay'
            },
            '90485': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '11',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Daniel Walczyk'
            },
            '90510': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MANE-4260',
              sec: '03',
              rem: 0,
              title: 'Mulitdisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Junichi Kanai, Ukwatte Lokuliyanage Indika Upendra Perera, Mark Ernest Vermilyea'
            },
            '90511': {
              daysTimes: [ [ 'W', { start: 800, end: 950 } ] ],
              id: 'MANE-4910',
              sec: '01',
              rem: 10,
              title: 'Fluid Dynamics Lab',
              instructor: 'Kevin Wayne Housley'
            },
            '90512': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'MANE-4910',
              sec: '02',
              rem: 10,
              title: 'Fluid Dynamics Lab',
              instructor: 'Kevin Wayne Housley'
            },
            '90545': {
              daysTimes: [ [ 'W', { start: 1400, end: 1650 } ] ],
              id: 'MANE-4920',
              sec: '02',
              rem: 30,
              title: 'Aerospace Structures And Control Laboratory',
              instructor: 'Nikhil Koratkar'
            },
            '90675': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '53',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Shanbin Shi'
            },
            '90676': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '54',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Matthew Adam Oehlschlaeger'
            },
            '90677': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '54',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Matthew Adam Oehlschlaeger'
            },
            '91050': {
              daysTimes: [ [ 'W', { start: 900, end: 1050 } ] ],
              id: 'MANE-4040',
              sec: '01',
              rem: 22,
              title: 'Mechanical Systems Lab',
              instructor: 'Luiz Victor Repolho Cagliari'
            },
            '91066': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '30',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Yaron Danon'
            },
            '91126': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '02',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Jie Lian'
            },
            '91264': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'MANE-4040',
              sec: '02',
              rem: 22,
              title: 'Mechanical Systems Lab',
              instructor: 'Luiz Victor Repolho Cagliari'
            },
            '91265': {
              daysTimes: [ [ 'W', { start: 1500, end: 1650 } ] ],
              id: 'MANE-4040',
              sec: '03',
              rem: 22,
              title: 'Mechanical Systems Lab',
              instructor: 'Ali Shahsavari'
            },
            '91266': {
              daysTimes: [ [ 'R', { start: 800, end: 950 } ] ],
              id: 'MANE-4040',
              sec: '04',
              rem: 22,
              title: 'Mechanical Systems Lab',
              instructor: 'Luiz Victor Repolho Cagliari'
            },
            '91280': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '01',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Nikhil Koratkar'
            },
            '91281': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '06',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Daniel Walczyk'
            },
            '91302': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '14',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Li Liu'
            },
            '91328': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '10',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Catalin R Picu'
            },
            '91329': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '12',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Yaron Danon'
            },
            '91338': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '16',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Diana Andra Borca Tasciuc'
            },
            '91439': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '17',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jie Lian'
            },
            '91461': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MANE-4260',
              sec: '04',
              rem: 0,
              title: 'Mulitdisciplinary Capstone Design',
              instructor: 'Valerie J. Masterson, Junichi Kanai, Mark Ernest Vermilyea, Fred Thomas Willett'
            },
            '91477': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '04',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Thierry Blanchet'
            },
            '91492': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '05',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Mark S Shephard'
            },
            '91493': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '08',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Mark S Shephard'
            },
            '91499': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '06',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Diana Andra Borca Tasciuc'
            },
            '91509': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '08',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'John Wen'
            },
            '91510': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '20',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Onkar Sahni'
            },
            '91565': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '01',
              rem: 10,
              title: "Master's Project",
              instructor: 'Wei Ji'
            },
            '91636': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '13',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Amir Hirsa'
            },
            '91637': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '21',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Lucy T. Zhang'
            },
            '91819': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '14',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Sandeep Singh'
            },
            '91833': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '65',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Wei Ji'
            },
            '91855': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'MANE-4910',
              sec: '03',
              rem: 10,
              title: 'Fluid Dynamics Lab',
              instructor: 'Kevin Wayne Housley'
            },
            '91856': {
              daysTimes: [ [ 'W', { start: 1400, end: 1550 } ] ],
              id: 'MANE-4910',
              sec: '04',
              rem: 10,
              title: 'Fluid Dynamics Lab',
              instructor: 'Kevin Wayne Housley'
            },
            '91872': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'MANE-6962',
              sec: '01',
              rem: 18,
              title: 'Multivariable Control Systems',
              instructor: 'John Wen'
            },
            '91896': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '15',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Kurt S Anderson'
            },
            '91980': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '16',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Shaowu Pan'
            },
            '92047': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MANE-4230',
              sec: '01',
              rem: 100,
              title: 'Air Vehicle Design',
              instructor: 'Kevin Wayne Housley, Luiz Victor Repolho Cagliari'
            },
            '92052': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '26',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Antoinette Maniatty'
            },
            '92053': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '27',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Sandipan Mishra'
            },
            '92054': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '03',
              rem: 10,
              title: "Master's Project",
              instructor: 'Hyun Gook Kang'
            },
            '92055': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '26',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Sandipan Mishra'
            },
            '92093': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '17',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Lucy T. Zhang'
            },
            '92096': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '18',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Johnson Samuel'
            },
            '92097': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '28',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Johnson Samuel'
            },
            '92103': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '19',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Onkar Sahni'
            },
            '92226': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'MANE-4170',
              sec: '01',
              rem: 100,
              title: 'Machine Dynamics',
              instructor: 'Joshua Lucas Hurst'
            },
            '92234': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '04',
              rem: 10,
              title: "Master's Project",
              instructor: 'Michael Amitay'
            },
            '92238': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '05',
              rem: 10,
              title: "Master's Project",
              instructor: 'Antoinette Maniatty'
            },
            '92253': {
              daysTimes: [ [ 'R', { start: 1400, end: 1550 } ] ],
              id: 'MANE-4040',
              sec: '05',
              rem: 22,
              title: 'Mechanical Systems Lab',
              instructor: 'Ali Shahsavari'
            },
            '92279': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '06',
              rem: 10,
              title: "Master's Project",
              instructor: 'Kurt S Anderson'
            },
            '92372': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '22',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Farhan Gandhi'
            },
            '92494': {
              daysTimes: [ [ 'M', { start: 1000, end: 1150 } ] ],
              id: 'MANE-4040',
              sec: '06',
              rem: 22,
              title: 'Mechanical Systems Lab',
              instructor: 'Luiz Victor Repolho Cagliari'
            },
            '92502': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '24',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Jason Edward Hicken'
            },
            '92503': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '28',
              rem: 0,
              title: "Master's Thesis",
              instructor: 'TBA'
            },
            '92504': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '29',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Farhan Gandhi'
            },
            '92506': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '07',
              rem: 10,
              title: "Master's Project",
              instructor: 'Sandipan Mishra'
            },
            '92507': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '10',
              rem: 10,
              title: "Master's Project",
              instructor: 'Jason Edward Hicken'
            },
            '92508': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '11',
              rem: 10,
              title: "Master's Project",
              instructor: 'Matthew Adam Oehlschlaeger'
            },
            '92509': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '13',
              rem: 0,
              title: "Master's Project",
              instructor: 'TBA'
            },
            '92510': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '14',
              rem: 10,
              title: "Master's Project",
              instructor: 'Farhan Gandhi'
            },
            '92511': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '15',
              rem: 10,
              title: "Master's Project",
              instructor: 'Johnson Samuel'
            },
            '92517': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '27',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Jason Edward Hicken'
            },
            '92518': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '29',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Sandeep Singh'
            },
            '92533': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '08',
              rem: 10,
              title: "Master's Project",
              instructor: 'Theodorian Borca-Tasciuc'
            },
            '92546': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '09',
              rem: 10,
              title: "Master's Project",
              instructor: 'Amir Hirsa'
            },
            '92547': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '17',
              rem: 0,
              title: "Master's Project",
              instructor: 'TBA'
            },
            '92695': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '20',
              rem: 10,
              title: "Master's Project",
              instructor: 'Lucy T. Zhang'
            },
            '92699': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '21',
              rem: 10,
              title: "Master's Project",
              instructor: 'Sandeep Singh'
            },
            '92746': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '22',
              rem: 10,
              title: "Master's Project",
              instructor: 'Shaowu Pan'
            },
            '92747': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '23',
              rem: 10,
              title: "Master's Project",
              instructor: 'Daniel Walczyk'
            },
            '92803': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '24',
              rem: 10,
              title: "Master's Project",
              instructor: 'Li Liu'
            },
            '92958': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '50',
              rem: 10,
              title: "Master's Project",
              instructor: 'Diana Andra Borca Tasciuc'
            },
            '93006': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MANE-4030',
              sec: '01',
              rem: 100,
              title: 'Elements Of Mech Design',
              instructor: 'M Arshad Zahangir Chowdhury'
            },
            '93012': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Shankar Narayan'
            },
            '93013': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '21',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Michael Amitay'
            },
            '93014': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '25',
              rem: 10,
              title: "Master's Project",
              instructor: 'Shankar Narayan'
            },
            '93015': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Kristen Lynn Mills'
            },
            '93016': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '30',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Kristen Lynn Mills'
            },
            '93017': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '26',
              rem: 10,
              title: "Master's Project",
              instructor: 'Kristen Lynn Mills'
            },
            '93018': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '32',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Theodorian Borca-Tasciuc'
            },
            '93029': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '33',
              rem: 10,
              title: "Master's Project",
              instructor: 'Asish Ghosh'
            },
            '93030': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '33',
              rem: 0,
              title: "Master's Thesis",
              instructor: 'TBA'
            },
            '93042': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '12',
              rem: 10,
              title: 'Dissertation',
              instructor: 'John A Tichy'
            },
            '93043': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '27',
              rem: 0,
              title: "Master's Project",
              instructor: 'TBA'
            },
            '93130': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '60',
              rem: 10,
              title: "Master's Project",
              instructor: 'John A Tichy'
            },
            '93136': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '45',
              rem: 0,
              title: "Master's Project",
              instructor: 'TBA'
            },
            '93144': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '75',
              rem: 10,
              title: "Master's Project",
              instructor: 'Jie Lian'
            },
            '93180': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'MANE-1060',
              sec: '01',
              rem: 250,
              title: 'Fundamentals Of Flight',
              instructor: 'Fotios Kopsaftopoulos'
            },
            '93181': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MANE-4240',
              sec: '02',
              rem: 50,
              title: 'Intro To Finite Elements',
              instructor: 'Mark S Shephard'
            },
            '93219': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '34',
              rem: 10,
              title: "Master's Project",
              instructor: 'Shankar Narayan'
            },
            '93220': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '34',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Shankar Narayan'
            },
            '93221': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '35',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Yaron Danon'
            },
            '93222': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '35',
              rem: 10,
              title: "Master's Project",
              instructor: 'Yaron Danon'
            },
            '93223': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MANE-4140',
              sec: '01',
              rem: 100,
              title: 'Intro Computat Fluid Dynamics',
              instructor: 'Onkar Sahni'
            },
            '93224': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '28',
              rem: 10,
              title: "Master's Project",
              instructor: 'John Wen'
            },
            '93231': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '32',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Hyun Gook Kang'
            },
            '93248': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '36',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Michael David Hughes'
            },
            '93249': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '36',
              rem: 10,
              title: "Master's Project",
              instructor: 'Michael David Hughes'
            },
            '93285': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '29',
              rem: 0,
              title: "Master's Project",
              instructor: 'TBA'
            },
            '93374': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '30',
              rem: 1,
              title: "Master's Project",
              instructor: 'Suvranu De'
            },
            '93376': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '31',
              rem: 10,
              title: "Master's Project",
              instructor: 'Suvranu De'
            },
            '93377': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '32',
              rem: 10,
              title: "Master's Project",
              instructor: 'Catalin R Picu'
            },
            '93383': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MANE-2220',
              sec: '01',
              rem: 28,
              title: "Inventor's Studio 1",
              instructor: 'Casey Jay Hoffman, Asish Ghosh, Jordan L Vener'
            },
            '93500': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '03',
              rem: 0,
              title: "Master's Thesis",
              instructor: 'TBA'
            },
            '93501': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '12',
              rem: 0,
              title: "Master's Project",
              instructor: 'TBA'
            },
            '93502': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '01',
              rem: 0,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '93503': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '07',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Mamadou Lamine Diagne'
            },
            '93504': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '16',
              rem: 10,
              title: "Master's Project",
              instructor: 'Mamadou Lamine Diagne'
            },
            '93505': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '09',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Mamadou Lamine Diagne'
            },
            '93506': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '09',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Fotios Kopsaftopoulos'
            },
            '93507': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '18',
              rem: 10,
              title: "Master's Project",
              instructor: 'Fotios Kopsaftopoulos'
            },
            '93508': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '11',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Fotios Kopsaftopoulos'
            },
            '93515': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '19',
              rem: 10,
              title: "Master's Project",
              instructor: 'Onkar Sahni'
            },
            '93530': {
              daysTimes: [],
              id: 'MANE-6970',
              sec: 'H02',
              rem: 10,
              title: "Master's Professional Project",
              instructor: 'Francisco J Cunha'
            },
            '93531': {
              daysTimes: [],
              id: 'MANE-6970',
              sec: 'H03',
              rem: 10,
              title: "Master's Professional Project",
              instructor: 'Ernesto Gutierrez-Miravete'
            },
            '93650': {
              daysTimes: [],
              id: 'MANE-6720',
              sec: 'H01',
              rem: 25,
              title: 'Adv Computnl Fluid Dynamics',
              instructor: 'Francisco J Cunha'
            },
            '93655': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MANE-2110',
              sec: '01',
              rem: 42,
              title: 'Numerical Methods And Programming For Engineers',
              instructor: 'Jason Edward Hicken'
            },
            '93664': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1320 } ],
                [ 'F', { start: 1200, end: 1320 } ]
              ],
              id: 'MANE-2400',
              sec: '01',
              rem: 50,
              title: 'Fundamentals Of Nuclear Engr',
              instructor: 'Hyun Gook Kang'
            },
            '93666': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'MANE-2720',
              sec: '01',
              rem: 70,
              title: 'Fluid Mechanics',
              instructor: 'Shanbin Shi'
            },
            '93686': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MANE-4060',
              sec: '01',
              rem: 100,
              title: 'Aerospace Struc & Materials',
              instructor: 'Prabhat Hajela'
            },
            '93687': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MANE-4070',
              sec: '01',
              rem: 100,
              title: 'Aerodynamics I',
              instructor: 'Keith Robert Taylor'
            },
            '93688': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MANE-4240',
              sec: '03',
              rem: 50,
              title: 'Intro To Finite Elements',
              instructor: 'Ali Shahsavari'
            },
            '93690': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ]
              ],
              id: 'MANE-4350',
              sec: '01',
              rem: 50,
              title: 'Instrumentation & Measur',
              instructor: 'Thomas Clark Haley'
            },
            '93694': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MANE-6140',
              sec: '01',
              rem: 15,
              title: 'Intro Computat Fluid Dynamics',
              instructor: 'Onkar Sahni'
            },
            '93715': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'MANE-4520',
              sec: '01',
              rem: 24,
              title: 'Mechatronics',
              instructor: 'Sandipan Mishra'
            },
            '93725': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1520 } ],
                [ 'R', { start: 1400, end: 1520 } ]
              ],
              id: 'MANE-6961',
              sec: '01',
              rem: 20,
              title: 'Scientific Machine Learning',
              instructor: 'Shaowu Pan'
            },
            '93754': {
              daysTimes: [],
              id: 'MANE-5000',
              sec: 'H01',
              rem: 25,
              title: 'Advanced Engr Mathematics I',
              instructor: 'Francisco J Cunha'
            },
            '93755': {
              daysTimes: [],
              id: 'MANE-6980',
              sec: '38',
              rem: 10,
              title: "Master's Project",
              instructor: 'Shanbin Shi'
            },
            '93756': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '20',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Shanbin Shi'
            },
            '93776': {
              daysTimes: [],
              id: 'MANE-9990',
              sec: '18',
              rem: 0,
              title: 'Dissertation',
              instructor: 'TBA'
            },
            '93870': {
              daysTimes: [ [ 'W', { start: 1600, end: 1750 } ] ],
              id: 'MANE-1100',
              sec: '01',
              rem: 100,
              title: 'Introduction To Nuclear Engineering',
              instructor: 'Bimal K Malaviya'
            },
            '93871': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MANE-2110',
              sec: '02',
              rem: 42,
              title: 'Numerical Methods And Programming For Engineers',
              instructor: 'Tara Gallaway Cohen'
            },
            '93872': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MANE-2110',
              sec: '03',
              rem: 42,
              title: 'Numerical Methods And Programming For Engineers',
              instructor: 'Jacob Simon Merson'
            },
            '93873': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'MANE-2110',
              sec: '04',
              rem: 42,
              title: 'Numerical Methods And Programming For Engineers',
              instructor: 'Tara Gallaway Cohen'
            },
            '93874': {
              daysTimes: [
                [ 'T', { start: 830, end: 950 } ],
                [ 'F', { start: 830, end: 950 } ]
              ],
              id: 'MANE-2710',
              sec: '01',
              rem: 150,
              title: 'Thermodynamics',
              instructor: 'Theodorian Borca-Tasciuc'
            },
            '93875': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'MANE-2720',
              sec: '02',
              rem: 70,
              title: 'Fluid Mechanics',
              instructor: 'Corey Christopher Woodcock'
            },
            '93876': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'MANE-4500',
              sec: '01',
              rem: 64,
              title: 'Modeling And Contrl Of Dyn Sys',
              instructor: 'Sarah Helen Felix'
            },
            '93877': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'MANE-4080',
              sec: '01',
              rem: 100,
              title: 'Propulsion Systems',
              instructor: 'Amir Hirsa'
            },
            '93878': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MANE-4220',
              sec: '01',
              rem: 28,
              title: "Inventor's Studio 2",
              instructor: 'Clinton T. Ballinger, Asish Ghosh, Susan Victoria Henry'
            },
            '93879': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'MANE-4240',
              sec: '01',
              rem: 50,
              title: 'Intro To Finite Elements',
              instructor: 'Kartik Josyula'
            },
            '93915': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MANE-4210',
              sec: '01',
              rem: 100,
              title: 'Vtol Aircraft Design',
              instructor: 'Robert John Niemiec'
            },
            '93916': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MANE-6210',
              sec: '01',
              rem: 15,
              title: 'Vtol Aircraft Design',
              instructor: 'Robert John Niemiec'
            },
            '93958': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ]
              ],
              id: 'MANE-4960',
              sec: '01',
              rem: 100,
              title: 'Compressible Flows',
              instructor: 'Ozgur Tumuklu'
            },
            '94175': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MANE-2110',
              sec: '05',
              rem: 42,
              title: 'Numerical Methods And Programming For Engineers',
              instructor: 'Jason Edward Hicken'
            },
            '94176': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'MANE-4330',
              sec: '01',
              rem: 28,
              title: "Inventor's Studio 3",
              instructor: 'Asish Ghosh, Tracy N. Sullivan'
            },
            '94177': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'MANE-4730',
              sec: '01',
              rem: 150,
              title: 'Heat Transfer',
              instructor: 'Shankar Narayan'
            },
            '94179': {
              daysTimes: [],
              id: 'MANE-4880',
              sec: '01',
              rem: 0,
              title: 'Mane Laboratory Safety Program',
              instructor: 'Thomas Clark Haley'
            },
            '94180': {
              daysTimes: [
                [ 'M', { start: 900, end: 1150 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'MANE-4740',
              sec: '01',
              rem: 10,
              title: 'Thermal and Fluids Engineering Laboratory',
              instructor: 'Ukwatte Lokuliyanage Indika Upendra Perera'
            },
            '94181': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1650 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'MANE-4740',
              sec: '02',
              rem: 10,
              title: 'Thermal and Fluids Engineering Laboratory',
              instructor: 'Ukwatte Lokuliyanage Indika Upendra Perera'
            },
            '94182': {
              daysTimes: [
                [ 'T', { start: 900, end: 1150 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'MANE-4740',
              sec: '03',
              rem: 10,
              title: 'Thermal and Fluids Engineering Laboratory',
              instructor: 'Fred Thomas Willett'
            },
            '94183': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1650 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'MANE-4740',
              sec: '04',
              rem: 10,
              title: 'Thermal and Fluids Engineering Laboratory',
              instructor: 'Fred Thomas Willett'
            },
            '94184': {
              daysTimes: [
                [ 'W', { start: 900, end: 1150 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'MANE-4740',
              sec: '05',
              rem: 10,
              title: 'Thermal and Fluids Engineering Laboratory',
              instructor: 'Bimal K Malaviya'
            },
            '94185': {
              daysTimes: [
                [ 'W', { start: 1300, end: 1350 } ],
                [ 'W', { start: 1400, end: 1650 } ]
              ],
              id: 'MANE-4740',
              sec: '06',
              rem: 10,
              title: 'Thermal and Fluids Engineering Laboratory',
              instructor: 'Fred Thomas Willett'
            },
            '94186': {
              daysTimes: [
                [ 'W', { start: 1300, end: 1350 } ],
                [ 'R', { start: 900, end: 1150 } ]
              ],
              id: 'MANE-4740',
              sec: '07',
              rem: 10,
              title: 'Thermal and Fluids Engineering Laboratory',
              instructor: 'Fred Thomas Willett'
            },
            '94187': {
              daysTimes: [
                [ 'W', { start: 1300, end: 1350 } ],
                [ 'R', { start: 1400, end: 1650 } ]
              ],
              id: 'MANE-4740',
              sec: '08',
              rem: 10,
              title: 'Thermal and Fluids Engineering Laboratory',
              instructor: 'Fred Thomas Willett'
            },
            '94192': {
              daysTimes: [ [ 'W', { start: 800, end: 950 } ] ],
              id: 'MANE-4510',
              sec: '01',
              rem: 30,
              title: 'Control Systems Lab',
              instructor: 'Joshua Lucas Hurst'
            },
            '94193': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'MANE-4510',
              sec: '02',
              rem: 30,
              title: 'Control Systems Lab',
              instructor: 'Joshua Lucas Hurst'
            },
            '94194': {
              daysTimes: [ [ 'W', { start: 1400, end: 1550 } ] ],
              id: 'MANE-4510',
              sec: '03',
              rem: 30,
              title: 'Control Systems Lab',
              instructor: 'Joshua Lucas Hurst'
            },
            '94195': {
              daysTimes: [ [ 'W', { start: 1600, end: 1750 } ] ],
              id: 'MANE-4510',
              sec: '04',
              rem: 30,
              title: 'Control Systems Lab',
              instructor: 'Joshua Lucas Hurst'
            },
            '94247': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ]
              ],
              id: 'MANE-4640',
              sec: '01',
              rem: 100,
              title: 'Analy. Of Manuf. Process',
              instructor: 'Thierry Blanchet'
            },
            '94296': {
              daysTimes: [ [ 'W', { start: 1200, end: 1550 } ] ],
              id: 'MANE-4430',
              sec: '01',
              rem: 50,
              title: 'Linear Accelerator Lab',
              instructor: 'Yaron Danon'
            },
            '94332': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'MANE-6963',
              sec: '01',
              rem: 15,
              title: 'Robotics II',
              instructor: 'Kimberly Irene Oakes'
            },
            '94340': {
              daysTimes: [],
              id: 'MANE-5000',
              sec: '01',
              rem: 10,
              title: 'Advanced Engr Mathematics I',
              instructor: 'Francisco J Cunha'
            },
            '94491': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'MANE-4030',
              sec: '02',
              rem: 100,
              title: 'Elements Of Mech Design',
              instructor: 'M Arshad Zahangir Chowdhury'
            },
            '94523': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ]
              ],
              id: 'MANE-4410',
              sec: '01',
              rem: 50,
              title: 'Appl Atomic & Nucl Phys',
              instructor: 'James Edward Olson'
            },
            '94527': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'MANE-4500',
              sec: '02',
              rem: 64,
              title: 'Modeling And Contrl Of Dyn Sys',
              instructor: 'Sarah Helen Felix'
            },
            '94529': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ]
              ],
              id: 'MANE-6410',
              sec: '01',
              rem: 15,
              title: 'Appl Atomic & Nucl Phys',
              instructor: 'James Edward Olson'
            },
            '94557': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 800, end: 850 } ]
              ],
              id: 'MANE-1960',
              sec: '01',
              rem: 150,
              title: 'Mechanics 1',
              instructor: 'Ali Shahsavari, Thomas Clark Haley, Catalin R Picu'
            },
            '94558': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'W', { start: 900, end: 950 } ]
              ],
              id: 'MANE-1961',
              sec: '01',
              rem: 150,
              title: 'Intro Engineering Computation',
              instructor: 'Thomas Clark Haley, Catalin R Picu, Ali Shahsavari'
            },
            '94613': {
              daysTimes: [ [ 'W', { start: 1400, end: 1650 } ] ],
              id: 'MANE-4962',
              sec: '01',
              rem: 50,
              title: 'Machine Learning Engineering',
              instructor: 'M Arshad Zahangir Chowdhury'
            },
            '94626': {
              daysTimes: [],
              id: 'MANE-6990',
              sec: '37',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'TBA'
            },
            '94660': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1720 } ],
                [ 'R', { start: 1600, end: 1720 } ]
              ],
              id: 'MANE-4963',
              sec: '01',
              rem: 15,
              title: 'Robotics II',
              instructor: 'Kimberly Irene Oakes'
            },
            '94742': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ]
              ],
              id: 'MANE-6570',
              sec: '01',
              rem: 20,
              title: 'Aerodynamic Flow Control',
              instructor: 'Michael Amitay'
            },
            '94743': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'W', { start: 1100, end: 1250 } ]
              ],
              id: 'MANE-4620',
              sec: '01',
              rem: 12,
              title: 'Manufact Process & Sys Lab II',
              instructor: 'Samuel G Chiappone, Larry David Oligny'
            },
            '94744': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1100, end: 1250 } ]
              ],
              id: 'MANE-4620',
              sec: '02',
              rem: 12,
              title: 'Manufact Process & Sys Lab II',
              instructor: 'Samuel G Chiappone, Larry David Oligny'
            },
            '94746': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1320 } ],
                [ 'R', { start: 1200, end: 1320 } ]
              ],
              id: 'MANE-6300',
              sec: '01',
              rem: 20,
              title: 'Numeric Meth Reac Analys',
              instructor: 'Wei Ji'
            },
            '94747': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'MANE-4460',
              sec: '01',
              rem: 50,
              title: 'Engineering Materials For Nuclear Application',
              instructor: 'Jie Lian'
            },
            '94748': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'MANE-6380',
              sec: '01',
              rem: 15,
              title: 'Nuclear Reactor Material',
              instructor: 'Jie Lian'
            },
            '94809': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1120 } ],
                [ 'F', { start: 1000, end: 1120 } ]
              ],
              id: 'MANE-6960',
              sec: '01',
              rem: 15,
              title: 'Compressible Flows',
              instructor: 'Ozgur Tumuklu'
            },
            '94811': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1520 } ],
                [ 'F', { start: 1400, end: 1520 } ]
              ],
              id: 'MANE-6965',
              sec: '01',
              rem: 20,
              title: 'Electrochemical Energy Storage',
              instructor: 'Fudong Han'
            },
            '94812': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1120 } ],
                [ 'R', { start: 1000, end: 1120 } ]
              ],
              id: 'MANE-6966',
              sec: '01',
              rem: 20,
              title: 'System Id - Learning From Data',
              instructor: 'Fotios Kopsaftopoulos'
            },
            '94835': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MANE-4860',
              sec: '01',
              rem: 100,
              title: 'Intro Nonlinear Finite Elemnts',
              instructor: 'Karthikeyan Panneerselvam'
            },
            '94836': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'MANE-6860',
              sec: '01',
              rem: 15,
              title: 'Intro Nonlinear Finite Elemnts',
              instructor: 'Karthikeyan Panneerselvam'
            },
            '94837': {
              daysTimes: [],
              id: 'MANE-4940',
              sec: '00',
              rem: 0,
              title: 'Independent Study In Mane',
              instructor: ''
            },
            '94838': {
              daysTimes: [],
              id: 'MANE-4640',
              sec: 'H01',
              rem: 25,
              title: 'Analy. Of Manuf. Process',
              instructor: 'Ernesto Gutierrez-Miravete'
            },
            '94879': {
              daysTimes: [
                [ 'M', { start: 1800, end: 1930 } ],
                [ 'R', { start: 1800, end: 1930 } ]
              ],
              id: 'MANE-6964',
              sec: '01',
              rem: 25,
              title: 'Intro Spacecraft Navigation',
              instructor: 'Thomas Clark Haley, Kurt S Anderson'
            },
            '94927': {
              daysTimes: [
                [ 'T', { start: 1230, end: 1350 } ],
                [ 'F', { start: 1230, end: 1350 } ]
              ],
              id: 'MANE-4961',
              sec: '01',
              rem: 15,
              title: 'Intro To Robot Programming',
              instructor: 'Kimberly Irene Oakes'
            }
          },
          USAR: {
            '90006': {
              daysTimes: [ [ 'W', { start: 1600, end: 1650 } ] ],
              id: 'USAR-1020',
              sec: '01',
              rem: 25,
              title: 'Fund Of Military Sci II',
              instructor: 'Donna Lee Carr, Luis R. Mejia-Roman'
            },
            '90007': {
              daysTimes: [ [ 'W', { start: 1500, end: 1550 } ] ],
              id: 'USAR-2020',
              sec: '01',
              rem: 25,
              title: 'Applied Leadership II',
              instructor: 'Donna Lee Carr, Luis R. Mejia-Roman'
            },
            '90008': {
              daysTimes: [ [ 'T', { start: 1500, end: 1730 } ] ],
              id: 'USAR-2070',
              sec: '01',
              rem: 15,
              title: 'Military Leadership II',
              instructor: 'Donna Lee Carr, Luis R. Mejia-Roman'
            },
            '90063': {
              daysTimes: [ [ 'M', { start: 1430, end: 1650 } ] ],
              id: 'USAR-4020',
              sec: '01',
              rem: 15,
              title: 'Military Mgmt & Leadership II',
              instructor: 'Donna Lee Carr, Luis R. Mejia-Roman'
            },
            '91857': {
              daysTimes: [ [ 'R', { start: 1430, end: 1650 } ] ],
              id: 'USAR-0020',
              sec: '01',
              rem: 25,
              title: 'Funadmentals Of Military Science Lab II',
              instructor: 'Luis R. Mejia-Roman, Donna Lee Carr'
            },
            '91858': {
              daysTimes: [ [ 'R', { start: 1430, end: 1650 } ] ],
              id: 'USAR-0040',
              sec: '01',
              rem: 25,
              title: 'Applied Leadership Lab II',
              instructor: 'Luis R. Mejia-Roman, Donna Lee Carr'
            },
            '91859': {
              daysTimes: [ [ 'R', { start: 1430, end: 1650 } ] ],
              id: 'USAR-0060',
              sec: '01',
              rem: 25,
              title: 'Applied Military Leadership Lab II',
              instructor: 'Luis R. Mejia-Roman, Donna Lee Carr'
            },
            '91860': {
              daysTimes: [ [ 'R', { start: 1430, end: 1650 } ] ],
              id: 'USAR-0080',
              sec: '01',
              rem: 25,
              title: 'Adv Milt Mgt Leadership Lab II',
              instructor: 'Donna Lee Carr, Luis R. Mejia-Roman'
            },
            '93922': {
              daysTimes: [ [ 'W', { start: 1300, end: 1530 } ] ],
              id: 'USAR-4020',
              sec: '02',
              rem: 15,
              title: 'Military Mgmt & Leadership II',
              instructor: 'Donna Lee Carr, Luis R. Mejia-Roman'
            }
          },
          USNA: {
            '90061': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'USNA-4190',
              sec: '01',
              rem: 35,
              title: 'Naval Leadership & Ethics',
              instructor: 'David John Latta'
            },
            '90124': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'USNA-2020',
              sec: '01',
              rem: 30,
              title: 'Seapower',
              instructor: 'Mark Yu Kersey'
            },
            '94347': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'USNA-2050',
              sec: '01',
              rem: 18,
              title: 'Navigation',
              instructor: 'Mark Yu Kersey'
            },
            '94348': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'USNA-2070',
              sec: '01',
              rem: 25,
              title: 'Naval Ships Systems II',
              instructor: 'Steven Anthony Pique'
            }
          },
          PHIL: {
            '90309': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'PHIL-1110',
              sec: '01',
              rem: 49,
              title: 'Intro To Philosophy',
              instructor: 'Daniel Peter Thero'
            },
            '90535': {
              daysTimes: [],
              id: 'PHIL-2940',
              sec: '00',
              rem: 0,
              title: 'Philosophy Studies',
              instructor: ''
            },
            '91047': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'PHIL-2100',
              sec: '01',
              rem: 48,
              title: 'Critical Thinking',
              instructor: 'Bram Van Heuveln, John R Milanese'
            },
            '91351': {
              daysTimes: [],
              id: 'PHIL-4990',
              sec: '02',
              rem: 10,
              title: 'Capstone Exper In Philosophy',
              instructor: 'Bram Van Heuveln'
            },
            '92063': {
              daysTimes: [],
              id: 'PHIL-4990',
              sec: '01',
              rem: 10,
              title: 'Capstone Exper In Philosophy',
              instructor: 'Daniel Peter Thero'
            },
            '92512': {
              daysTimes: [],
              id: 'PHIL-4990',
              sec: '03',
              rem: 10,
              title: 'Capstone Exper In Philosophy',
              instructor: 'Susan Lynn Smith'
            },
            '92664': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'PHIL-2140',
              sec: '01',
              rem: 300,
              title: 'Introduction To Logic',
              instructor: 'Selmer Bringsjord'
            },
            '93639': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'PHIL-4130',
              sec: '01',
              rem: 19,
              title: 'Philosophy Of Science',
              instructor: 'John R Milanese'
            },
            '93863': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'PHIL-4500',
              sec: '01',
              rem: 30,
              title: 'Bioethics',
              instructor: 'Susan Lynn Smith'
            },
            '93959': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'PHIL-1110',
              sec: '02',
              rem: 49,
              title: 'Intro To Philosophy',
              instructor: 'Daniel Peter Thero'
            },
            '94336': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1500 } ],
                [ 'F', { start: 1400, end: 1500 } ]
              ],
              id: 'PHIL-2960',
              sec: '01',
              rem: 19,
              title: 'Ethics Of Ai',
              instructor: 'John R Milanese'
            },
            '94886': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'PHIL-4140',
              sec: '01',
              rem: 30,
              title: 'Intermediate Logic',
              instructor: 'Bram Van Heuveln'
            },
            '94888': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'PHIL-4300',
              sec: '01',
              rem: 19,
              title: 'Environmental Philosophy',
              instructor: 'Daniel Peter Thero'
            },
            '94889': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'PHIL-4960',
              sec: '01',
              rem: 19,
              title: 'Philosophy Of Mathematics',
              instructor: 'Thomas Macaulay Ferguson'
            }
          },
          PHYS: {
            '90016': {
              daysTimes: [
                [ 'M', { start: 830, end: 920 } ],
                [ 'R', { start: 830, end: 920 } ],
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1200',
              sec: '03',
              rem: 48,
              title: 'Physics II',
              instructor: 'Charles Harold Martin, Glenn Ciolek'
            },
            '90067': {
              daysTimes: [
                [ 'M', { start: 830, end: 920 } ],
                [ 'R', { start: 830, end: 920 } ],
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1200',
              sec: '05',
              rem: 48,
              title: 'Physics II',
              instructor: 'Glenn Ciolek'
            },
            '90068': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'PHYS-1050',
              sec: '01',
              rem: 105,
              title: 'General Physics',
              instructor: 'Julian S. Georg'
            },
            '90080': {
              daysTimes: [
                [ 'M', { start: 830, end: 920 } ],
                [ 'R', { start: 830, end: 920 } ],
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1200',
              sec: '02',
              rem: 35,
              title: 'Physics II',
              instructor: 'Glenn Ciolek'
            },
            '90094': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1200, end: 1250 } ]
              ],
              id: 'PHYS-4100',
              sec: '01',
              rem: 25,
              title: 'Intro Quantum Mech',
              instructor: 'Julian S. Georg'
            },
            '90118': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1100',
              sec: '08',
              rem: 48,
              title: 'Physics I',
              instructor: 'Yong Sung Kim'
            },
            '90119': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1100',
              sec: '01',
              rem: 48,
              title: 'Physics I',
              instructor: 'Joseph Darryl Michael, Yong Sung Kim'
            },
            '90120': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1100',
              sec: '03',
              rem: 48,
              title: 'Physics I',
              instructor: 'Joseph Darryl Michael, Yong Sung Kim'
            },
            '90121': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1100',
              sec: '05',
              rem: 48,
              title: 'Physics I',
              instructor: 'Hesham Hassan, Yong Sung Kim, Christian M. Wetzel'
            },
            '90122': {
              daysTimes: [
                [ 'T', { start: 830, end: 920 } ],
                [ 'F', { start: 830, end: 920 } ],
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1200',
              sec: '06',
              rem: 48,
              title: 'Physics II',
              instructor: 'Glenn Ciolek, Nadarajah Narendran'
            },
            '90123': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'PHYS-2620',
              sec: '01',
              rem: 15,
              title: 'Fundamentals Of Optics',
              instructor: 'Shawn Yu Lin'
            },
            '90125': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'PHYS-4210',
              sec: '01',
              rem: 48,
              title: 'Electromagnetic Theory',
              instructor: 'Ingrid Wilke'
            },
            '90130': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'PHYS-4420',
              sec: '01',
              rem: 45,
              title: 'Thermodyn & Stat Mech',
              instructor: 'Humberto Terrones Maldonado'
            },
            '90169': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '01',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Gyorgy Korniss'
            },
            '90170': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Humberto Terrones Maldonado'
            },
            '90186': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '07',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ingrid Wilke'
            },
            '90187': {
              daysTimes: [],
              id: 'PHYS-2990',
              sec: '01',
              rem: 50,
              title: 'Thesis',
              instructor: 'Heidi Jo Newberg'
            },
            '90213': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '09',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Gwo Ching Wang'
            },
            '90232': {
              daysTimes: [
                [ 'T', { start: 830, end: 920 } ],
                [ 'F', { start: 830, end: 920 } ],
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1200',
              sec: '07',
              rem: 48,
              title: 'Physics II',
              instructor: 'Glenn Ciolek, Nadarajah Narendran, John Schroeder'
            },
            '90283': {
              daysTimes: [
                [ 'M', { start: 830, end: 920 } ],
                [ 'R', { start: 830, end: 920 } ],
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1200',
              sec: '01',
              rem: 48,
              title: 'Physics II',
              instructor: 'Glenn Ciolek'
            },
            '90293': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '16',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Toh-Ming Lu'
            },
            '90370': {
              daysTimes: [ [ 'W', { start: 1600, end: 1750 } ] ],
              id: 'PHYS-6900',
              sec: '01',
              rem: 50,
              title: 'Physics Colloquium',
              instructor: 'Esther Alexandra Wertz'
            },
            '90402': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1100',
              sec: '07',
              rem: 48,
              title: 'Physics I',
              instructor: 'Shengbai Zhang, Yong Sung Kim'
            },
            '90473': {
              daysTimes: [],
              id: 'PHYS-6940',
              sec: '00',
              rem: 0,
              title: 'Readings In Phys',
              instructor: ''
            },
            '90478': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '21',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Christian M. Wetzel'
            },
            '90788': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '28',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Trevor David Rhone'
            },
            '91088': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '06',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Shawn Yu Lin'
            },
            '91099': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '11',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Heidi Jo Newberg'
            },
            '91111': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '18',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Peter Persans'
            },
            '91277': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'PHYS-6410',
              sec: '01',
              rem: 25,
              title: 'Electrodynamics',
              instructor: 'Moussa Ngom'
            },
            '91279': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ]
              ],
              id: 'PHYS-6520',
              sec: '01',
              rem: 30,
              title: 'Quantum Mechanics II',
              instructor: 'Damien J. West'
            },
            '91389': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Zhaoran Huang'
            },
            '91419': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '01',
              rem: 25,
              title: "Master's Project",
              instructor: 'Joel T. Giedt'
            },
            '91447': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1100',
              sec: '02',
              rem: 48,
              title: 'Physics I',
              instructor: 'Damien J. West, Yong Sung Kim'
            },
            '91448': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1100',
              sec: '04',
              rem: 48,
              title: 'Physics I',
              instructor: 'Pascal D. Bassene, Yong Sung Kim'
            },
            '91449': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1100',
              sec: '06',
              rem: 48,
              title: 'Physics I',
              instructor: 'Christian M. Wetzel, Yong Sung Kim'
            },
            '91450': {
              daysTimes: [
                [ 'M', { start: 830, end: 920 } ],
                [ 'R', { start: 830, end: 920 } ],
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1200',
              sec: '04',
              rem: 48,
              title: 'Physics II',
              instructor: 'Charles Harold Martin, Glenn Ciolek'
            },
            '91451': {
              daysTimes: [
                [ 'T', { start: 830, end: 920 } ],
                [ 'F', { start: 830, end: 920 } ],
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1200',
              sec: '08',
              rem: 48,
              title: 'Physics II',
              instructor: 'Yong Zheng, Glenn Ciolek'
            },
            '91476': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Moussa Ngom'
            },
            '91494': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '14',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Joel T. Giedt'
            },
            '91529': {
              daysTimes: [],
              id: 'PHYS-6990',
              sec: '01',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Vincent Meunier'
            },
            '91534': {
              daysTimes: [],
              id: 'PHYS-4960',
              sec: '01',
              rem: 15,
              title: 'Physics Teaching Seminar',
              instructor: 'Peter Persans'
            },
            '91545': {
              daysTimes: [
                [ 'T', { start: 830, end: 920 } ],
                [ 'F', { start: 830, end: 920 } ],
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ],
                [ 'W', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1200',
              sec: '09',
              rem: 48,
              title: 'Physics II',
              instructor: 'Yong Zheng, Glenn Ciolek, John Schroeder'
            },
            '91571': {
              daysTimes: [],
              id: 'PHYS-6990',
              sec: '05',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Gwo Ching Wang'
            },
            '91840': {
              daysTimes: [],
              id: 'PHYS-6990',
              sec: '06',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Toh-Ming Lu'
            },
            '91889': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '17',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Yunfeng Shi'
            },
            '91966': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '02',
              rem: 5,
              title: "Master's Project",
              instructor: 'Moussa Ngom'
            },
            '92003': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '03',
              rem: 10,
              title: "Master's Project",
              instructor: 'Peter Persans'
            },
            '92051': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'PHYS-4810',
              sec: '01',
              rem: 30,
              title: 'Computational Physics',
              instructor: 'Trevor David Rhone'
            },
            '92107': {
              daysTimes: [],
              id: 'PHYS-4910',
              sec: '01',
              rem: 0,
              title: 'Culminating Experience Project',
              instructor: 'Peter Persans, Vincent Meunier'
            },
            '92260': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '04',
              rem: 10,
              title: "Master's Project",
              instructor: 'Heidi Jo Newberg'
            },
            '92261': {
              daysTimes: [],
              id: 'PHYS-6990',
              sec: '04',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Joel T. Giedt'
            },
            '92350': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'PHYS-2220',
              sec: '01',
              rem: 70,
              title: 'Quantum Physics II',
              instructor: 'Peter Persans'
            },
            '92384': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '05',
              rem: 10,
              title: "Master's Project",
              instructor: 'Vincent Meunier'
            },
            '92397': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'PHYS-4961',
              sec: '01',
              rem: 20,
              title: 'Particle Astrophysics',
              instructor: 'Ethan Craig Brown'
            },
            '92398': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '07',
              rem: 5,
              title: "Master's Project",
              instructor: 'Christian M. Wetzel'
            },
            '92407': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '24',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Michael Shur'
            },
            '92410': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '08',
              rem: 10,
              title: "Master's Project",
              instructor: 'Ingrid Wilke'
            },
            '92553': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '23',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Shengbai Zhang'
            },
            '92563': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '11',
              rem: 10,
              title: "Master's Project",
              instructor: 'Gwo Ching Wang'
            },
            '92659': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'PHYS-4240',
              sec: '01',
              rem: 20,
              title: 'General Relativity',
              instructor: 'Joel T. Giedt'
            },
            '92698': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '31',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ethan Craig Brown'
            },
            '93064': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '14',
              rem: 10,
              title: "Master's Project",
              instructor: 'Toh-Ming Lu'
            },
            '93068': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '15',
              rem: 10,
              title: "Master's Project",
              instructor: 'Shawn Yu Lin'
            },
            '93086': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '16',
              rem: 10,
              title: "Master's Project",
              instructor: 'Humberto Terrones Maldonado'
            },
            '93213': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1100',
              sec: '09',
              rem: 48,
              title: 'Physics I',
              instructor: 'Gwo Ching Wang, Yong Sung Kim'
            },
            '93214': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1100',
              sec: '10',
              rem: 48,
              title: 'Physics I',
              instructor: 'Yong Sung Kim'
            },
            '93226': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1100',
              sec: '11',
              rem: 48,
              title: 'Physics I',
              instructor: 'Hesham Hassan, Yong Sung Kim, Damien J. West'
            },
            '93227': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1100',
              sec: '12',
              rem: 48,
              title: 'Physics I',
              instructor: 'Christian M. Wetzel, Yong Sung Kim'
            },
            '93251': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '17',
              rem: 10,
              title: "Master's Project",
              instructor: 'Shengbai Zhang'
            },
            '93293': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '27',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Esther Alexandra Wertz'
            },
            '93297': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '18',
              rem: 1,
              title: "Master's Project",
              instructor: 'Ethan Craig Brown'
            },
            '93468': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'PHYS-4330',
              sec: '01',
              rem: 60,
              title: 'Theoretical Mechanics',
              instructor: 'Charles Harold Martin'
            },
            '93473': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'PHYS-1600',
              sec: '02',
              rem: 5,
              title: 'Materials Science',
              instructor: 'John R. LaGraff, Chaitanya Kishore Ullal'
            },
            '93476': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'PHYS-1600',
              sec: '03',
              rem: 5,
              title: 'Materials Science',
              instructor: 'Ravishankar Sundararaman, John R. LaGraff, Chaitanya Kishore Ullal'
            },
            '93479': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'PHYS-1600',
              sec: '04',
              rem: 5,
              title: 'Materials Science',
              instructor: 'Wei Bao, John R. LaGraff, Chaitanya Kishore Ullal'
            },
            '93485': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ],
                [ 'W', { start: 1300, end: 1350 } ]
              ],
              id: 'PHYS-1600',
              sec: '01',
              rem: 5,
              title: 'Materials Science',
              instructor: 'John R. LaGraff, Chaitanya Kishore Ullal'
            },
            '93511': {
              daysTimes: [],
              id: 'PHYS-6990',
              sec: '02',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Esther Alexandra Wertz'
            },
            '93514': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Vincent Meunier'
            },
            '93527': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '06',
              rem: 10,
              title: "Master's Project",
              instructor: 'Esther Alexandra Wertz'
            },
            '93562': {
              daysTimes: [],
              id: 'PHYS-9990',
              sec: '08',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Ravishankar Sundararaman'
            },
            '93772': {
              daysTimes: [],
              id: 'PHYS-6990',
              sec: '03',
              rem: 10,
              title: "Master's Thesis",
              instructor: 'Ingrid Wilke'
            },
            '93901': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'PHYS-2210',
              sec: '01',
              rem: 35,
              title: 'Quantum Physics I',
              instructor: 'Peter Persans'
            },
            '94272': {
              daysTimes: [ [ 'W', { start: 800, end: 1150 } ] ],
              id: 'PHYS-2350',
              sec: '01',
              rem: 16,
              title: 'Experimental Physics',
              instructor: 'Joseph Darryl Michael'
            },
            '94350': {
              daysTimes: [],
              id: 'PHYS-2962',
              sec: '01',
              rem: 40,
              title: 'Practicum In College Teaching',
              instructor: 'Peter Persans'
            },
            '94421': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'PHYS-1150',
              sec: '01',
              rem: 20,
              title: 'Intro Classical Dynamics',
              instructor: 'Gyorgy Korniss'
            },
            '94422': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'W', { start: 1000, end: 1150 } ]
              ],
              id: 'PHYS-1150',
              sec: '02',
              rem: 20,
              title: 'Intro Classical Dynamics',
              instructor: 'Gyorgy Korniss'
            },
            '94423': {
              daysTimes: [
                [ 'M', { start: 800, end: 950 } ],
                [ 'R', { start: 800, end: 950 } ],
                [ 'W', { start: 1400, end: 1550 } ]
              ],
              id: 'PHYS-1150',
              sec: '03',
              rem: 20,
              title: 'Intro Classical Dynamics',
              instructor: 'Gyorgy Korniss'
            },
            '94526': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'PHYS-6963',
              sec: '01',
              rem: 10,
              title: 'Particle Astrophysics',
              instructor: 'Ethan Craig Brown'
            },
            '94639': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1100',
              sec: '13',
              rem: 48,
              title: 'Physics I',
              instructor: 'Damien J. West, Yong Sung Kim'
            },
            '94640': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '09',
              rem: 10,
              title: "Master's Project",
              instructor: 'Julian S. Georg'
            },
            '94641': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '10',
              rem: 10,
              title: "Master's Project",
              instructor: 'Glenn Ciolek'
            },
            '94642': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '12',
              rem: 10,
              title: "Master's Project",
              instructor: 'Yong Sung Kim'
            },
            '94643': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '13',
              rem: 10,
              title: "Master's Project",
              instructor: 'Charles Harold Martin'
            },
            '94644': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '19',
              rem: 10,
              title: "Master's Project",
              instructor: 'Joseph Darryl Michael'
            },
            '94645': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '20',
              rem: 10,
              title: "Master's Project",
              instructor: 'Trevor David Rhone'
            },
            '94646': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '21',
              rem: 10,
              title: "Master's Project",
              instructor: 'Gyorgy Korniss'
            },
            '94647': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '22',
              rem: 10,
              title: "Master's Project",
              instructor: 'Hesham Hassan'
            },
            '94648': {
              daysTimes: [],
              id: 'PHYS-6980',
              sec: '23',
              rem: 10,
              title: "Master's Project",
              instructor: 'Trevor David Rhone'
            },
            '94674': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ],
                [ 'T', { start: 1800, end: 1950 } ]
              ],
              id: 'PHYS-1100',
              sec: '14',
              rem: 48,
              title: 'Physics I',
              instructor: 'Juan Pablo Borja, Yong Sung Kim'
            }
          },
          PSYC: {
            '90037': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'PSYC-1200',
              sec: '02',
              rem: 240,
              title: 'Intro To Psychological Science',
              instructor: 'Lucy Cui'
            },
            '90073': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'PSYC-1200',
              sec: '01',
              rem: 240,
              title: 'Intro To Psychological Science',
              instructor: 'Lucy Cui'
            },
            '90308': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'PSYC-2100',
              sec: '01',
              rem: 48,
              title: 'Critical Thinking',
              instructor: 'John R Milanese, Bram Van Heuveln'
            },
            '90474': {
              daysTimes: [],
              id: 'PSYC-4940',
              sec: '00',
              rem: 0,
              title: 'Readings In Psyc',
              instructor: ''
            },
            '92457': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'PSYC-4610',
              sec: '01',
              rem: 4,
              title: 'Stress And The Brain',
              instructor: 'Alicia Ann Walf'
            },
            '93267': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'PSYC-4730',
              sec: '01',
              rem: 120,
              title: 'Positive Psychology',
              instructor: 'Holly A Traver'
            },
            '93403': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'PSYC-4730',
              sec: '02',
              rem: 40,
              title: 'Positive Psychology',
              instructor: 'Holly A Traver'
            },
            '93638': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'PSYC-2310',
              sec: '01',
              rem: 19,
              title: 'Research Methods And Statistics I',
              instructor: 'Lucy Cui'
            },
            '93866': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'PSYC-2310',
              sec: '02',
              rem: 19,
              title: 'Research Methods And Statistics I',
              instructor: 'Lucy Cui'
            },
            '93867': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'PSYC-4370',
              sec: '01',
              rem: 60,
              title: 'Cognitive Psychology',
              instructor: 'Stefan Tomov Radev'
            },
            '93887': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'PSYC-4430',
              sec: '01',
              rem: 14,
              title: 'Psychology Of Mindfulness',
              instructor: 'Holly A Traver'
            },
            '93888': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'PSYC-4430',
              sec: '02',
              rem: 5,
              title: 'Psychology Of Mindfulness',
              instructor: 'Holly A Traver'
            },
            '93911': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'PSYC-4350',
              sec: '01',
              rem: 19,
              title: 'Math Methods In Psyc Sci',
              instructor: 'Christopher Robert Sims'
            },
            '93912': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'PSYC-4350',
              sec: '02',
              rem: 10,
              title: 'Math Methods In Psyc Sci',
              instructor: 'Christopher Robert Sims'
            },
            '94281': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'PSYC-4220',
              sec: '01',
              rem: 30,
              title: 'Animal Cognition&inter W/human',
              instructor: 'Marjorie McShane'
            },
            '94317': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'PSYC-4200',
              sec: '01',
              rem: 60,
              title: "Industrial & Org'l Psychology",
              instructor: 'Holly A Traver'
            },
            '94587': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'PSYC-4960',
              sec: '01',
              rem: 19,
              title: 'Psychology Of Games',
              instructor: 'Ralph G Noble'
            },
            '94896': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'PSYC-4370',
              sec: '02',
              rem: 20,
              title: 'Cognitive Psychology',
              instructor: 'Stefan Tomov Radev'
            },
            '94928': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'PSYC-4610',
              sec: '02',
              rem: 8,
              title: 'Stress And The Brain',
              instructor: 'Alicia Ann Walf'
            },
            '94930': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'PSYC-4360',
              sec: '01',
              rem: 10,
              title: 'Behavioral Neuroscience',
              instructor: 'Alicia Ann Walf'
            },
            '94931': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'PSYC-4360',
              sec: '02',
              rem: 10,
              title: 'Behavioral Neuroscience',
              instructor: 'Alicia Ann Walf'
            }
          },
          STSO: {
            '94123': {
              daysTimes: [ [ 'W', { start: 1400, end: 1550 } ] ],
              id: 'STSO-4100',
              sec: '01',
              rem: 30,
              title: 'Pd - Tech Issues & Solutions',
              instructor: 'Daniel Allen Lyles'
            },
            '94124': {
              daysTimes: [ [ 'M', { start: 1000, end: 1150 } ] ],
              id: 'STSO-4100',
              sec: '02',
              rem: 30,
              title: 'Pd - Tech Issues & Solutions',
              instructor: 'Allison Beth Hoffman'
            },
            '94125': {
              daysTimes: [ [ 'W', { start: 1400, end: 1550 } ] ],
              id: 'STSO-4100',
              sec: '03',
              rem: 30,
              title: 'Pd - Tech Issues & Solutions',
              instructor: 'Allison Beth Hoffman'
            },
            '94126': {
              daysTimes: [ [ 'T', { start: 800, end: 950 } ] ],
              id: 'STSO-4100',
              sec: '04',
              rem: 30,
              title: 'Pd - Tech Issues & Solutions',
              instructor: 'Daniel Allen Lyles'
            },
            '94127': {
              daysTimes: [ [ 'M', { start: 1200, end: 1350 } ] ],
              id: 'STSO-4100',
              sec: '06',
              rem: 30,
              title: 'Pd - Tech Issues & Solutions',
              instructor: 'Allison Beth Hoffman'
            },
            '94128': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'STSO-4100',
              sec: '07',
              rem: 30,
              title: 'Pd - Tech Issues & Solutions',
              instructor: 'Allison Beth Hoffman'
            },
            '94129': {
              daysTimes: [ [ 'W', { start: 1200, end: 1350 } ] ],
              id: 'STSO-4100',
              sec: '08',
              rem: 30,
              title: 'Pd - Tech Issues & Solutions',
              instructor: 'Allison Beth Hoffman'
            },
            '94130': {
              daysTimes: [ [ 'T', { start: 1400, end: 1550 } ] ],
              id: 'STSO-4100',
              sec: '09',
              rem: 30,
              title: 'Pd - Tech Issues & Solutions',
              instructor: 'Daniel Allen Lyles'
            },
            '94131': {
              daysTimes: [ [ 'F', { start: 1400, end: 1550 } ] ],
              id: 'STSO-4100',
              sec: '10',
              rem: 30,
              title: 'Pd - Tech Issues & Solutions',
              instructor: 'Daniel Allen Lyles'
            },
            '94132': {
              daysTimes: [ [ 'F', { start: 800, end: 950 } ] ],
              id: 'STSO-4100',
              sec: '05',
              rem: 30,
              title: 'Pd - Tech Issues & Solutions',
              instructor: 'Daniel Allen Lyles'
            },
            '94133': {
              daysTimes: [ [ 'M', { start: 1400, end: 1550 } ] ],
              id: 'STSO-4100',
              sec: '12',
              rem: 30,
              title: 'Pd - Tech Issues & Solutions',
              instructor: 'Azita Hirsa'
            },
            '94134': {
              daysTimes: [ [ 'W', { start: 1000, end: 1150 } ] ],
              id: 'STSO-4100',
              sec: '13',
              rem: 30,
              title: 'Pd - Tech Issues & Solutions',
              instructor: 'Azita Hirsa'
            },
            '94135': {
              daysTimes: [ [ 'R', { start: 1400, end: 1550 } ] ],
              id: 'STSO-4100',
              sec: '11',
              rem: 30,
              title: 'Pd - Tech Issues & Solutions',
              instructor: 'Azita Hirsa'
            },
            '94267': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'STSO-1110',
              sec: '01',
              rem: 38,
              title: 'Science, Technology & Society',
              instructor: 'TBA'
            },
            '94273': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'STSO-2300',
              sec: '01',
              rem: 38,
              title: 'Environment And Society',
              instructor: 'Jonathan Garrett Wald'
            },
            '94276': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'STSO-4250',
              sec: '01',
              rem: 30,
              title: 'Bioethics',
              instructor: 'Susan Lynn Smith'
            },
            '94277': {
              daysTimes: [
                [ 'M', { start: 1600, end: 1750 } ],
                [ 'R', { start: 1600, end: 1750 } ]
              ],
              id: 'STSO-4300',
              sec: '01',
              rem: 19,
              title: 'Sustainability & Sts Careers',
              instructor: 'Brandon James Costelloe-Kuehn'
            },
            '94278': {
              daysTimes: [ [ 'W', { start: 1300, end: 1650 } ] ],
              id: 'STSO-4970',
              sec: '01',
              rem: 29,
              title: 'Dis Senior Project',
              instructor: 'Raquel Velho'
            },
            '94279': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'STSO-4990',
              sec: '01',
              rem: 19,
              title: 'Sts & Sust Senior Project',
              instructor: 'Jennifer Cardinal'
            },
            '94283': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1650 } ],
                [ 'R', { start: 1400, end: 1650 } ]
              ],
              id: 'STSO-4610',
              sec: '01',
              rem: 29,
              title: 'Design And Innovation Studio C',
              instructor: 'Brian Clyne'
            },
            '94284': {
              daysTimes: [
                [ 'M', { start: 1200, end: 1350 } ],
                [ 'R', { start: 1200, end: 1350 } ]
              ],
              id: 'STSO-2210',
              sec: '01',
              rem: 29,
              title: 'Design, Culture, And Society',
              instructor: 'Brian Tolle'
            },
            '94285': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'STSO-4430',
              sec: '01',
              rem: 19,
              title: 'Drugs In History',
              instructor: 'Nancy D. Campbell'
            },
            '94287': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'STSO-4500',
              sec: '01',
              rem: 19,
              title: 'Globalization & Development',
              instructor: 'Jennifer Cardinal'
            },
            '94291': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'STSO-2520',
              sec: '01',
              rem: 50,
              title: 'Sociology',
              instructor: 'Katherine Anne Tyrol'
            },
            '94325': {
              daysTimes: [],
              id: 'STSO-9990',
              sec: '02',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Nancy D. Campbell'
            },
            '94326': {
              daysTimes: [],
              id: 'STSO-9990',
              sec: '03',
              rem: 10,
              title: 'Dissertation',
              instructor: 'James Wilson Malazita'
            },
            '94327': {
              daysTimes: [],
              id: 'STSO-9990',
              sec: '04',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Abby J. Kinchy'
            },
            '94328': {
              daysTimes: [],
              id: 'STSO-9990',
              sec: '05',
              rem: 10,
              title: 'Dissertation',
              instructor: 'Raquel Velho'
            },
            '94552': {
              daysTimes: [],
              id: 'STSO-6990',
              sec: '01',
              rem: 10,
              title: 'Masters Thesis',
              instructor: 'Nancy D. Campbell'
            },
            '94577': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'STSO-4400',
              sec: '01',
              rem: 19,
              title: 'Medicine, Culture & Society',
              instructor: 'Katherine Anne Tyrol'
            },
            '94624': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'STSO-4350',
              sec: '01',
              rem: 19,
              title: 'Politics Of Design',
              instructor: 'Brian Tolle'
            },
            '94629': {
              daysTimes: [
                [ 'M', { start: 1000, end: 1150 } ],
                [ 'R', { start: 1000, end: 1150 } ]
              ],
              id: 'STSO-4330',
              sec: '01',
              rem: 19,
              title: 'Environmental Justice',
              instructor: 'Jennifer Cardinal'
            },
            '94897': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'STSO-2500',
              sec: '01',
              rem: 50,
              title: 'American History',
              instructor: 'Adam Lawrence Biggs'
            },
            '94898': {
              daysTimes: [
                [ 'T', { start: 900, end: 1150 } ],
                [ 'F', { start: 900, end: 1150 } ]
              ],
              id: 'STSO-2610',
              sec: '01',
              rem: 29,
              title: 'Design & Innovation Studio II',
              instructor: 'James Wilson Malazita, Brian Clyne'
            },
            '94899': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'STSO-4340',
              sec: '01',
              rem: 19,
              title: 'Environmental Philosophy',
              instructor: 'Daniel Peter Thero'
            },
            '94900': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'STSO-4960',
              sec: '01',
              rem: 19,
              title: 'Governing Complex Ecosys',
              instructor: 'Jonathan Garrett Wald'
            },
            '94901': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'STSO-4961',
              sec: '01',
              rem: 19,
              title: 'Biology Of Everyday Life',
              instructor: 'Matthew Wolf-Meyer'
            },
            '94902': {
              daysTimes: [
                [ 'T', { start: 1000, end: 1150 } ],
                [ 'F', { start: 1000, end: 1150 } ]
              ],
              id: 'STSO-4962',
              sec: '01',
              rem: 19,
              title: 'Human Futures',
              instructor: 'Matthew Wolf-Meyer'
            },
            '94903': {
              daysTimes: [ [ 'R', { start: 900, end: 1150 } ] ],
              id: 'STSO-6040',
              sec: '01',
              rem: 10,
              title: 'Technology Studies',
              instructor: 'Hasan Tankut Atuk'
            },
            '94904': {
              daysTimes: [ [ 'T', { start: 900, end: 1150 } ] ],
              id: 'STSO-6960',
              sec: '01',
              rem: 10,
              title: 'Community-engaged Sts',
              instructor: 'Abby J. Kinchy'
            }
          },
          WRIT: {
            '92520': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'WRIT-2320',
              sec: '01',
              rem: 19,
              title: 'Creative Nonfiction Writing',
              instructor: 'Skye Anicca'
            },
            '94040': {
              daysTimes: [
                [ 'T', { start: 1200, end: 1350 } ],
                [ 'F', { start: 1200, end: 1350 } ]
              ],
              id: 'WRIT-2340',
              sec: '01',
              rem: 19,
              title: 'Speech Communication',
              instructor: 'Alexander Scott Hiland'
            },
            '94341': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'WRIT-2330',
              sec: '01',
              rem: 14,
              title: 'Creative Writing: The Short Story',
              instructor: 'Skye Anicca'
            },
            '94342': {
              daysTimes: [
                [ 'T', { start: 800, end: 950 } ],
                [ 'F', { start: 800, end: 950 } ]
              ],
              id: 'WRIT-2330',
              sec: '02',
              rem: 5,
              title: 'Creative Writing: The Short Story',
              instructor: 'Skye Anicca'
            },
            '94506': {
              daysTimes: [
                [ 'T', { start: 1400, end: 1550 } ],
                [ 'F', { start: 1400, end: 1550 } ]
              ],
              id: 'WRIT-2340',
              sec: '02',
              rem: 19,
              title: 'Speech Communication',
              instructor: 'Alexander Scott Hiland'
            },
            '94890': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'WRIT-4410',
              sec: '01',
              rem: 15,
              title: 'Research Writing',
              instructor: 'Leah Corinne Jones'
            },
            '94891': {
              daysTimes: [
                [ 'M', { start: 1400, end: 1550 } ],
                [ 'R', { start: 1400, end: 1550 } ]
              ],
              id: 'WRIT-6410',
              sec: '01',
              rem: 5,
              title: 'Research Writing',
              instructor: 'Leah Corinne Jones'
            }
          }
      }
    }

    getCourseDataByMajor(major) {
        if (major in this.courseData) {
            return this.courseData[major];
        }else{
            return null;
        }   
    }

    getAllCourses() {
        return this.courseData;
    }

    static getInstance() {
      if (!Courses.instance) {
        Courses.instance = new Courses();
      }
      return Courses.instance;
    }
}