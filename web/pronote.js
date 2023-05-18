function login(username, password) {
	this.GInterface.RecupererDonnees();
	this.GInterface.moteurConnexion.setLogin(username);
	this.GInterface.moteurConnexion.setMotDePasse(password);
	this.GInterface.moteurConnexion.identification();
}

function init(json) {
	json.poll = false;
	require("DeclarationJournauxCP.js");
	const ObjetDroitsPN = require("ObjetDroitsPN.js").ObjetDroitsPN;
	const ObjetRequeteFonctionParametres = require("ObjetRequeteFonctionParametres.js");
	const ObjetParametres = require("Parametres.js");
	const deferLoadingScript = require("deferLoadingScript.js");
	const {ObjetInvocateur, Invocateur} = require("Invocateur.js");
	const MethodesObjet = require("MethodesObjet.js");
	const _ObjetCommunication = require("_ObjetCommunication.js");
	const GStyle = require("GStyle.js");
	const EGenreBoiteMessage = require("Enumere_BoiteMessage.js");
	const GCryptage = require("ObjetCryptage.js");
	const ObjetCycles = require("ObjetCycles.js");
	const {GDate} = require("ObjetDate.js");
	const GTraductions = require("ObjetTraduction.js");
	const TypeEnsembleNombre = require("TypeEnsembleNombre.js");
	const ObjetAccesPN = require("objetaccespn.js");
	const ObjetOptionsEspaceLocalPN = require("ObjetOptionsEspaceLocalPN.js");
	const TypeModeGrillesEDT = require("TypeModeGrillesEDT.js").TypeModeGrillesEDT;
	const ObjetApplication = require("ObjetApplication.js");
	const UtilitaireMAJServeur = require("UtilitaireMAJServeur.js");
	const ObjetDonneesCentraleNotificationsSco = require("ObjetDonneesCentraleNotificationsSco.js");
	const UtilitaireDeconnexion = require("UtilitaireDeconnexion.js");
	require("DeclarationObjetRequetePN.js");
	const uGestionPresence = {modeExclusif: false, compteurAffichageMessagerie: 0};
	
	json.d = false;
	const ObjetApplicationPNEspace = require("objetapplicationpnespace.js");
	this.GApplication = new ObjetApplicationPNEspace;
	
	this.GApplication.setDemo(json.d);
	Invocateur.evenement(ObjetInvocateur.events.initChiffrement, json);
	const lParametres = {genreEspace: json.a, numeroJeton: json.e ? json.e : -1, cleJeton: json.f ? json.f : "", genreAcces: json.g ? json.g : 0, numeroSession: json.h, forcerInscription: json.fi, page: json.p};
	this.GApplication.acces = new ObjetAccesPN(lParametres.genreAcces, lParametres.genreEspace, 0, 0, lParametres.numeroJeton, 0, "", "");
	if (this.GApplication.acces.estConnexionCAS() || this.GApplication.acces.estConnexionCookie()) {
		this.GApplication.acces.setIdentification(lParametres.numeroJeton, lParametres.cleJeton);
	}
	this.GApplication.droits = new ObjetDroitsPN;
    this.GApplication.parametresUtilisateur = new (require("ObjetParametresUtilisateur.js"));
    IE.optionsEspaceLocal = new ObjetOptionsEspaceLocalPN({nomProduit: this.GApplication.nomProduit, espace: lParametres.genreEspace});
	deferLoadingScript.setOptions({done() {}, fail(aNom) {
    	this.GApplication.getCommunication().sendLogClient(`erreur chargement script defer : ${aNom}`);
		UtilitaireDeconnexion.deconnexionEchecChargement();
	}, messageChargement: GTraductions.getValeur("connexion.Chargement")});
	this.GApplication.initialisation(lParametres);
	this.GApplication.lancerRequeteParametres(lParametres);
	UtilitaireMAJServeur.initialiser({afficherMessageDelaiLong: !GEtatUtilisateur.estEspacePourEleve(), afficherMessageImminentEleve: GEtatUtilisateur.estEspacePourEleve(), cssImage: GEtatUtilisateur.pourPrimaire() ? "Image_AlerteMiseAJourPRM" : "Image_AlerteMiseAJourPRN"});
	if (json.fi) {
    	GEtatUtilisateur.forcerOngletInscription = true;
	}
    if (IE.optionsEspaceLocal) {
    	if (IE.optionsEspaceLocal.getModeAccessible) {
    		GEtatUtilisateur.setModeAccessible(IE.optionsEspaceLocal.getModeAccessible());
    	}
    	if (IE.optionsEspaceLocal.getAvecCodeCompetences) {
    		GEtatUtilisateur.setAvecCodeCompetences(IE.optionsEspaceLocal.getAvecCodeCompetences());
    	}
    	if (IE.optionsEspaceLocal.getAvecThemeAccessible) {
    		GEtatUtilisateur.setAvecThemeAccessible(IE.optionsEspaceLocal.getAvecThemeAccessible());
    	}
    }
}

