package org.catsid.controllers;

import java.util.List;

import org.catsid.dao.PaysRepository;
import org.catsid.dao.ProduitRepository;
import org.catsid.entities.Pays;
import org.catsid.entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// Controlleur accessible via une Servlet
// Spring MVC déploie dispatcher Servlet
// Spring MVC on l'a utilisé comme un RestController , li ne génére pas des JSP ou des pages HTML 
// mais il génére un résultat en format JSON

@RestController
@CrossOrigin("*")
public class CatalogueController {
	
	
	private ProduitRepository produitRepository;

	public CatalogueController(ProduitRepository produitRepository) {
		this.produitRepository=produitRepository;
	}
	
	@RequestMapping(value="/test")
	public String Test() {
		return "test";
	}
	
								
	
	@RequestMapping(value="/save")
	public Produit saveProduit(@RequestBody Produit pr) {
		produitRepository.save(pr);
		return pr;
	}
	
	@RequestMapping(value="/all")
	public List<Produit> getProduits() {
		return produitRepository.findAll();
	}
	
	@RequestMapping(value="/produits")
	public Page<Produit> getProduitPage(int page) {
		return produitRepository.findAll(new PageRequest(page, 5));
		
	}
	
	// "%"+motCle+"%": c'est-à-dire quelque soit caractére avant ou aprés 
	@RequestMapping(value="/produitsParMotCle")
	public Page<Produit> getProduitMotCle(@RequestParam(name="motCle",defaultValue="")String motCle,
			@RequestParam(name="page",defaultValue="0")int page) {
		return produitRepository.ProduitParMotCle("%"+motCle+"%",new PageRequest(page, 5));
		
	}
	
	@RequestMapping(value="/produitsByReference/{reference}",method=RequestMethod.GET)
	public Produit getProduitByRef(@PathVariable Long reference) {
		return produitRepository.ProduitParId(reference);
		
	}
	
	// @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) ; On l'a utiliser si une balise ne se met pas
	
	// en format JSON.
	
	// --> getOne : Retourne un objet enrichit avec d'autres informations qui ne peut pas les 
	
	// serializé en format JSON, donc il faut ajouter @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}).
	
	// --> findOne : Retourne un objet serializé en format JSON et ferme la session.
	
	@RequestMapping(value="/getProduit/{reference}",method=RequestMethod.GET)
	public Produit getProduit(@PathVariable Long reference) {
		return produitRepository.findOne(reference);
		
	}
	
	@RequestMapping(value="/getProduitByReference")
	public Produit getProduitByReference(Long reference) {
		return produitRepository.findOne(reference);
		
	}
	
	@RequestMapping(value="/deleteProduit/{reference}",method=RequestMethod.DELETE)
	public boolean deleteProduit(@PathVariable Long reference) {
		 produitRepository.delete(reference);
		return true;
	}
	
	@RequestMapping(value="/deleteProduit")
	public boolean deleteProduitByReference(Long reference) {
		 produitRepository.delete(reference);
		return true;
	}
	
	@RequestMapping(value="/updateProduit/{reference}",method=RequestMethod.PUT)
	public Produit updateProduit(@RequestBody Produit prUpdate) {
		 produitRepository.saveAndFlush(prUpdate);
		return prUpdate;
	}
	
	@RequestMapping(value="/updateProduit")
	public Produit updateProduitByReference(@RequestBody Produit prUpdate) {
		 produitRepository.saveAndFlush(prUpdate);
		return prUpdate;
	}
	
}
