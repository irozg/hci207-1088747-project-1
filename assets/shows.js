// Πληροφορίες από πραγματικές παραστάσεις
const shows =
{
    "don-giovanni": {
        "name": "Ντον Τζοβάννι",
        "composer": "Βόλφγκανγκ Αμαντέους Μότσαρτ",
        "libretto": "Λορένζο ντα Πόντε",
        "room":"Κεντρική σκηνή",
        "mounth":"Απρίλιος 2021",
        "photo":"/assets/don-joviani.jpeg",
        "production": "Συμπαραγωγή με την Όπερα του Γκαίτεμποργκ (Σουηδία) και τη Βασιλική Όπερα της Δανίας",
        "description": `Η νέα παραγωγή του Ντον Τζοβάννι του Μότσαρτ αποτελεί μια μεγάλη διεθνή συμπαραγωγή της Εθνικής Λυρικής Σκηνής με δύο σημαντικά βορειοευρωπαϊκά λυρικά θέατρα, την Όπερα του Γκαίτεμποργκ και τη Βασιλική Όπερα της Δανίας. Τη σκηνοθεσία υπογράφει ο διακεκριμένος σκηνοθέτης και καλλιτεχνικός διευθυντής της Βασιλικής Όπερας της Δανίας Τζων Φούλτζεϊμς. Η παραγωγή, μετά την αθηναϊκή πρεμιέρα του Δεκεμβρίου του 2021, θα παρουσιαστεί σε Γκαίτεμποργκ και Κοπεγχάγη. O Φούλτζεϊμς τοποθετεί τη δράση της όπερας σε ένα σημερινό ξενοδοχείο, έναν μικρόκοσμο μιας πόλης, έναν τόπο συνάντησης ανθρώπων, όπου το ιδιωτικό γίνεται δημόσιο και ο χρόνος παραμονής είναι περιορισμένος. Ο σκηνοθέτης σημειώνει: «Ο Ντον Τζοβάννι είναι μια όπερα που διαρκεί στον χρόνο επειδή είναι πολύπλευρη· έχει πολύ χιούμορ και σπουδαία θεατρικά σκηνικά, όλα ενταγμένα μέσα σε μια σκοτεινή ιστορία μυστηρίου για έναν αποπλανητή που κάποιος πρέπει να τον σταματήσει. Είναι ένα έργο για το πώς ζούμε μαζί στην κοινωνία και, όπως συμβαίνει πάντα με την όπερα, για το πώς αντιμετωπίζουμε τον θάνατο. Η κορύφωσή του έγκειται στον πολυαναμενόμενο θάνατο του ίδιου του Ντον Τζοβάννι, καθώς προτιμάει τον θάνατο, ακόμα και την κόλαση, από το να απαρνηθεί το ποιος είναι. Ο θάνατός του είναι μια έκφραση της τάξης που επανεπιβεβαιώνει την ισχύ της έναντι της αχαλίνωτης ελευθερίας που εκείνος αντιπροσωπεύει». Στον Ντον Τζοβάννι –ένα από τα ορόσημα του οπερατικού ρεπερτορίου– ο Μότσαρτ αποδίδει με τη μουσική του όλες τις όψεις της πορείας του ανθρώπου που τα βάζει με τον Θεό και παίρνει την τύχη του στα χέρια του.`,
        "dates": ["2021-4-12", "2021-4-13", "2021-4-16", "2021-4-18", "2021-4-20", "2021-4-22", "2021-4-27", "2021-4-29"],
        "crew": {
            "conductor": "Ντάνιελ Σμιθ",
            "director": "Τζων Φούλτζεϊμς",
            "associate-director": "Αϋλίν Μπόζοκ",
            "sets": "Ντικ Μπερντ",
            "costumes": "Άνμαρι Γουντς",
            "choreographer": "Μαξίν Μπρέιαμ",
            "lighting designer": "Φαμπιάνα Πιτσόλι",
            "video designer": "Ουίλ Ντιούκ",
            "programmer video": "Νταν Τρέντσαρντ",
            "chorus master": "Αγαθάγγελος Γεωργακάτος",
        },
        "roles": {
            "Ντον Τζοβάννι": {
                "Τάσης Χριστογιαννόπουλος": ["2021-4-12", "2021-4-16", "2021-4-20", "2021-4-27"],
                "Διονύσης Σούρμπης": ["2021-4-13", "2021-4-18", "2021-4-22", "2021-4-29"]
            },
            "Ντόννα Άννα": {
                "Βασιλική Καραγιάννη": ["2021-4-12", "2021-4-16", "2021-4-20", "2021-4-27"],
                "Σιρανούς Τσαλικιάν": ["2021-4-13", "2021-4-18", "2021-4-22", "2021-4-29"]
            },
            "Ντον Οττάβιο": {
                "Γιάννης Χριστόπουλος ": ["2021-4-12", "2021-4-16", "2021-4-20", "2021-4-27"],
                "Βασίλης Καβάγιας": ["2021-4-13", "2021-4-18", "2021-4-22", "2021-4-29"]
            },
            "Διοικητής": {
                "Πέτρος Μαγουλάς": ["2021-4-12", "2021-4-16", "2021-4-20", "2021-4-27"],
                "Αλέξανδρος Σταυρακάκης": ["2021-4-13", "2021-4-18", "2021-4-22", "2021-4-29"]
            },
            "Ντόννα Ελβίρα": {
                "Άννα Στυλιανάκη": ["2021-4-12", "2021-4-16", "2021-4-20", "2021-4-27"],
                "Άρτεμις Μπόγρη": ["2021-4-13", "2021-4-18", "2021-4-22", "2021-4-29"]
            },
            "Λεπορέλλο": {
                "Τάσος Αποστόλου": ["2021-4-12", "2021-4-16", "2021-4-20", "2021-4-27"],
                "Χάρης Ανδριανός": ["2021-4-13", "2021-4-18", "2021-4-22", "2021-4-29"]
            },
            "Μαζέττο": {
                "Νίκος Κοτενίδης": ["2021-4-12", "2021-4-16", "2021-4-20", "2021-4-27"],
                "Γιώργος Ματθαιακάκης": ["2021-4-13", "2021-4-18", "2021-4-22", "2021-4-29"]
            },
            "Tσερλίνα": {
                "Χρύσα Μαλιαμάνη": ["2021-4-12", "2021-4-16", "2021-4-20", "2021-4-27"],
                "Μιράντα Μακρυνιώτη": ["2021-4-13", "2021-4-18", "2021-4-22", "2021-4-29"]
            },
        }
    },
    "mantama-batterflai": {
        "name": "Μαντάμα Μπαττερφλάι",
        "composer": "Τζάκομο Πουτσίνι",
        "libretto": "Λουίτζι Ίλικα και Τζουζέπε Τζακόζα",
        "room":"Σταύρος Νίαρχος",
        "mounth":"Απρίλιος-Μάιος 2021",
        "photo":"/assets/madama-butterfly.jpeg",
        "production": "Εθνική Λυρική Σκηνή",
        "description": `Η υπόθεση της όπερας αφορά τον μοιραίο έρωτα της δεκαπεντάχρονης γκέισας Τσο-Τσο-Σαν για τον Πίνκερτον, υποπλοίαρχο του Ναυτικού των Ηνωμένων Πολιτειών της Αμερικής. Ύστερα από τρία χρόνια απουσίας, ο αξιωματικός επιστρέφει με την Αμερικανίδα σύζυγό του στην Ιαπωνία, μαθαίνοντας ότι έχει αποκτήσει γιο από την Μπαττερφλάι. Εκείνη δέχεται να παραδώσει το παιδί μονάχα στον ίδιο τον Πίνκερτον και στη συνέχεια αυτοκτονεί. Διάσημη για τις υπέροχες άριες, την πρόδηλα μελωδική μουσική και τη δραματική θεατρικότητά της, η Μαντάμα Μπαττερφλάι συγκινεί διαχρονικά και προκαλεί έντονα συναισθήματα. Ο Πουτσίνι δεν διστάζει να τη χαρακτηρίσει ως την πιο αγαπημένη του όπερα, ενώ με τις μετέπειτα τροποποιήσεις ανάγει την αλαβάστρινη μορφή της ηρωίδας του σε σύμβολο ανεξάντλητης υπομονής και αιώνιας, σταθερής αγάπης. Τη σκηνοθεσία, τα σκηνικά και τα κοστούμια της παραγωγής, η οποία πρωτοπαρουσιάστηκε το 2013 στο Ηρώδειο, και τώρα αναβιώνει σε μια νέα εκδοχή για τη σκηνή της Αίθουσας Σταύρος Νιάρχος, υπογράφει ο διάσημος Αργεντινός σκηνοθέτης Ούγκο ντε Άνα. Πρόκειται για μια εντυπωσιακή παραγωγή με παραδοσιακά γιαπωνέζικα κοστούμια, ενώ τα σκηνικά και οι προβολές εικονοποιούν με εντυπωσιακό τρόπο τη χώρα του ανατέλλοντος ηλίου από τη μια και τον ψυχισμό της ηρωίδας από την άλλη. Τις προβολές υπογράφει ο Σέρτζιο Μετάλλι, ενώ τους φωτισμούς ο Βαλέριο Αλφιέρι.`,
        "dates": ["2021-4-14", "2021-4-16", "2021-4-18", "2021-4-23", "2021-4-25", "2021-4-30", "2021-5-01", "2021-5-08", "2021-5-15"],
        "crew": {
            "conductor": "Λουκάς Καρυτινός",
            "director": "Ούγκο ντε Άνα",
            "video projection designer": "Σέρτζιο Μετάλλι - Ideogamma SRL",
            "sets": "Ούγκο ντε Άνα",
            "costumes": "Ούγκο ντε Άνα",
            "lighting designer": "Βαλέριο Αλφιέρι",
            "chorus master": "Αγαθάγγελος Γεωργακάτος",
        },
        "roles": {
            "Τσο-Τσο-Σαν":
            {
                "Ερμονέλα Γιάχο": ["2021-4-14", "2021-4-16", "2021-4-25", "2021-5-08"],
                "Τσέλια Κοστέα": ["2021-5-15"],
                "Κριστίνε Οπολάις": ["2021-4-18", "2021-4-23", "2021-4-30", "2021-5-01", "2021-5-11"],
            },
            "Σουτζούκι": {
                "Χρυσάνθη Σπιτάδη": ["2021-4-14", "2021-4-16", "2021-4-18", "2021-4-25", "2021-4-23", "2021-4-25", "2021-4-30", , "2021-5-01", "2021-5-08", "2021-5-15"]
            },
            "Κέιτ Πίνκερτον": {
                "Βιολέττα Λούστα": ["2021-4-16", "2021-4-18", "2021-4-25", "2021-4-23", "2021-4-25"],
                "Διαμάντη Κριτσωτάκη": ["2021-4-14", "2021-4-30", "2021-5-01", "2021-5-08", "2021-5-15"]
            },
            "Μ.Φ.Πίνκερτον": {
                "Τζανλούκα Τερρανόβα": ["2021-4-16", "2021-4-25", "2021-4-23", "2021-4-25"],
                "Δημήτρης Πακσόγλου": ["2021-4-14", "2021-4-18", "2021-4-30", "2021-5-01", "2021-5-08", "2021-5-15"]
            },
            "Σάρπλες": {
                "Διονύσης Σούρμπης": ["2021-4-16", "2021-4-25", "2021-4-23", "2021-4-25"],
                "Νίκος Κοτενίδης": ["2021-4-14", "2021-4-18", "2021-4-30", "2021-5-01", "2021-5-08", "2021-5-15"]
            },
            "Γκόρο": {
                "Νίκος Στεφάνου": ["2021-4-16", "2021-4-25", "2021-4-23", "2021-4-25"],
                "Γιάννης Καλύβας": ["2021-4-14", "2021-4-18", "2021-4-30", "2021-5-01", "2021-5-08", "2021-5-15"]
            },
            "Πρίγκιπας Γιαμαντόρι": {
                "Μάριος Σαραντίδης": [],
            },
            "Μπόνζο": {
                "Γιάννης Γιαννίσης": ["2021-4-16", "2021-4-25", "2021-4-23", "2021-4-25", "2021-5-01"],
                "Δημήτρης Κασιούμης": ["2021-4-14", "2021-4-18", "2021-4-30", "2021-5-08", "2021-5-15"]
            },
            "Γιακουζιντέ": {
                "Πέτρος Σαλάτας": [],
            },
            "Αυτοκρατορικός Επίτροπος": {
                "Διονύσης Τσαντίνης": ["2021-4-16", "2021-4-25", "2021-4-25", "2021-5-01", "2021-5-15"],
                "Γιώργος Παπαδημητρίου": ["2021-4-14", "2021-4-18", "2021-4-23", "2021-4-30", "2021-5-08"]
            },
            "Ληξίαρχος": {
                "Θεόδωρος Αϊβαλιώτης": ["2021-4-16", "2021-4-25", "2021-4-25", "2021-5-01", "2021-5-15"],
                "Θεόδωρος Μωραΐτης": ["2021-4-14", "2021-4-18", "2021-4-23", "2021-4-30", "2021-5-08"]
            },
            "Μητέρα της Τσο - Τσο - Σαν": {
                "Αμαλία Αυλωνίτη": ["2021-4-16", "2021-4-25", "2021-4-25", "2021-5-01", "2021-5-15"],
                "Ζωή Απειρανθίτου": ["2021-4-14", "2021-4-18", "2021-4-23", "2021-4-30", "2021-5-08"]

            },
            "Θεία": {
                "Βάγια Κωφού": ["2021-4-16", "2021-4-25", "2021-4-25", "2021-5-01", "2021-5-15"],
                "Ελισάβετ Κλονόφσκαγια": ["2021-4-14", "2021-4-18", "2021-4-23", "2021-4-30", "2021-5-08"]
            },
            "Ξαδέρφη": {
                "Φωτεινή Χατζιδάκη": ["2021-4-16", "2021-4-25", "2021-4-25", "2021-5-01", "2021-5-15"],
                "Θέη Σταύρου": ["2021-4-14", "2021-4-18", "2021-4-23", "2021-4-30", "2021-5-08"]
            },
        }
    },
    "don-quixote": {
        "name": "Δον Κιχώτης",
        "composer": "Λούντβιχ Μίνκους",
        "libretto": "Τιάγκο Μπορντίν, Μαριύς Πετιπά / Λούντβιχ Μίνκους, Τζων Λόνγκσταφ",
        "room":"Σταύρος Νίαρχος",
        "mounth":"Μάϊος 2021",
        "photo":"/assets/don-kixotis.jpeg",
        "production": "Το Μπαλέτο της Εθνικής Λυρικής Σκηνής παρουσιάζει μια νέα φιλόδοξη παραγωγή του Δον Κιχώτη του Λούντβιχ Μίνκους, ενός από τα πιο διάσημα μπαλέτα όλων των εποχών",
        "description": `Το Μπαλέτο της Εθνικής Λυρικής Σκηνής ανοίγει τη νέα σεζόν με τη νέα φιλόδοξη παραγωγή του Δον Κιχώτη του Λούντβιχ Μίνκους, η οποία επρόκειτο να παρουσιαστεί τον περασμένο Μάρτιο, αλλά ανεστάλη λόγω της πανδημίας. Η χορογραφία του Τιάγκο Μπορντίν βασίζεται στην κλασική χορογραφία του Μαριύς Πετιπά, η οποία πρωτοπαρουσιάστηκε το 1869 στο Μπολσόι.
        Ο Δον Κιχώτης είναι ένα από τα σημαντικότερα και πιο δημοφιλή έργα του κλασικού ρεπερτορίου του μπαλέτου. Μέσα από τη μοναδική μουσική του Μίνκους, η χορογραφία περιγράφει μια ιστορία για τα υψηλά ιδανικά του ιπποτισμού που συγκινεί διαχρονικά συνδυάζοντας κωμικά και ρομαντικά στοιχεία. Για τη νέα παραγωγή του Δον Κιχώτη ο Διευθυντής του Μπαλέτου της ΕΛΣ Κωνσταντίνος Ρήγος επέλεξε καλλιτέχνες διεθνούς ακτινοβολίας, τον χορογράφο Τιάγκο Μπορντίν για να αναβιώσει την κλασική χορογραφία του Πετιπά, τον διεθνώς αναγνωρισμένο Έλληνα σκηνογράφο Γιώργο Σουγλίδη για τα σκηνικά και τη διάσημη Ελληνίδα fashion designer Μαίρη Κατράντζου για τα κοστούμια. Μαζί τους η Ειρήνη Βιανέλλη στον σχεδιασμό του animation και ο Χρήστος Τζιόγκας στους φωτισμούς.
        Ο Κωνσταντίνος Ρήγος σημειώνει: «Καθώς το κλασικό μπαλέτο είναι η βασική κατεύθυνση του Μπαλέτου της ΕΛΣ, από την πρώτη στιγμή που ανέλαβα τη διεύθυνσή του είχα στο μυαλό μου να παρουσιάσουμε έναν κλασικό Δον Κιχώτη. Είναι ένα έργο που αγαπώ και θεωρώ πως η ομάδα μας μπορεί να το ερμηνεύσει σε πολύ υψηλό επίπεδο. Βεβαίως, η έννοια του κλασικού στο μυαλό μου δεν έχει σχέση με σκονισμένα χαρτονένια σκηνικά και κοστούμια που μυρίζουν ναφθαλίνη. Γι’ αυτό από την πρώτη στιγμή στόχευσα σε καλλιτέχνες με ξεχωριστή ματιά και μοναδική αισθητική. Για τη δημιουργική αναβίωση της χορογραφίας του Πετιπά προσκαλέσαμε τον διακεκριμένο χορογράφο και χορευτή του Μπαλέτου του Αμβούργου και του Nederlands Dans Theater Τιάγκο Μπορντίν. Τα σκηνικά σχεδιάζει ο ιδιαιτέρως εμπνευσμένος σκηνογράφος μας, που διαπρέπει στα λυρικά θέατρα της Ευρώπης, Γιώργος Σουγλίδης και μαζί του η animator Ειρήνη Βιανέλλη. Για τα κοστούμια έχουμε τη χαρά να φέρνουμε για πρώτη φορά στην Εθνική Λυρική Σκηνή την κορυφαία Ελληνίδα fashion designer με τη μοναδική διεθνή καριέρα Μαίρη Κατράντζου, η οποία επαναπροσδιορίζει με μοναδικό τρόπο την έννοια του μπαλετικού κοστουμιού. Μαζί με την Ορχήστρα –σε μουσική διεύθυνση Στάθη Σούλη– και τους μοναδικούς χορευτές του Μπαλέτου της Εθνικής Λυρικής Σκηνής, είμαι βέβαιος ότι θα δημιουργήσουμε έναν Δον Κιχώτη κλασικό, αλλά και τόσο σημερινό ταυτόχρονα».
        Την Ορχήστρα της ΕΛΣ διευθύνει ο ανερχόμενος αρχιμουσικός Στάθης Σούλης. Συμμετέχουν οι Α΄ Χορευτές, οι Σολίστ, οι Κορυφαίοι και το Corps de Ballet της ΕΛΣ.`,
        "dates": ["2021-5-19", "2021-5-24", "2021-5-26", "2021-5-30", "2021-5-31"],
        "crew": {
            "conductor": "Λούντβιχ Μίνκους",
            "costumes": "Μαίρη Κατράντζου",
            "choreographer": "Τιάγκο Μπορντίν",
            "lighting designer": "Χρήστος Τζιόγκας",
            "video designer": "Ειρήνη Βιανέλλη",
            "chorus master": "Στάθης Σούλης",
        },
        "roles": {
            "Κίτρι": {
                "Ελεάνα Ανδρεούδη": ["2021-5-19", "2021-5-30"],
                "Μαρία Κουσουνή": ["2021-5-24", "2021-5-31"],
                "Αγιούκα Νίττα": ["2021-5-26"]
            },
            "Μπαζίλιο": {
                "Ντανίλο Ζέκα": ["2021-5-19", "2021-5-30"],
                "Βαγγέλης Μπίκος": ["2021-5-24", "2021-5-31" ],
                "Τζορντάνο Μπότσα": ["2021-5-26" ]
            },
            "Μερσέντες": {
                "Βανέσα Κούρκουλου": ["2021-5-19", "2021-5-30"],
                "Γιοβάνκα Ζάριτς": ["2021-5-24", "2021-5-31"],
                "Μαργαρίτα Κώστογλου": ["2021-5-26"]
            },
            "Εσπάντα": {
                "Ίγκορ Σιάτζκο": ["2021-5-19", "2021-5-30"],
                "Γιάννης Γκάντσιος": ["2021-5-24", "2021-5-31"],
                "Γιάννης Μητράκης": ["2021-5-26"]
            },
            "Δον Κιχώτης": {
                "Θανάσης Σολωμός": ["2021-5-19", "2021-5-26", "2021-5-31"],
                "Ευάγγελος Λαφάρας": ["2021-5-24", "2021-5-30"]
            },
            "Σάντσο Πάντσα": {
                "Αγάπιος Αγαπιάδης": ["22021-5-19", "2021-5-26", "2021-5-31", ],
                "Έκτωρ Μπολλάνο": ["2021-5-24", "2021-5-30"]
            },
            "Δουλτσινέα": {
                "Μάνια Καραβασίλη": ["2021-5-19", "2021-5-26", "2021-5-31"],
                "Δέσποινα Μπισμπίκη": ["2021-5-24", "2021-5-30"]
            },
            "Γκαμάς": {
                "Στέλιος Κατωπόδης": ["2021-5-19", "2021-5-24", "2021-5-26", "2021-5-30", "2021-5-31"]
            },
        }
    },
};