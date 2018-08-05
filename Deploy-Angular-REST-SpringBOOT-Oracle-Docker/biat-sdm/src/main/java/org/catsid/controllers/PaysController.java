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

@RestController
@CrossOrigin("*")
public class PaysController {
	
	@Autowired
	private PaysRepository paysRepository;

	
@RequestMapping(value="/pays")
public Pays saveBalad(@RequestBody Pays pays) {
return paysRepository.save(pays);
}

@RequestMapping(value="/affichePays")
public List<Pays> getPays() {
return paysRepository.findAll();
}

//"%"+motCle+"%": c'est-à-dire quelque soit caractére avant ou aprés 
	@RequestMapping(value="/paysParMotCle")
	public Page<Pays> getPaysParMotCle(@RequestParam(name="motCle",defaultValue="")String motCle,
			@RequestParam(name="page",defaultValue="0")int page) {
		return paysRepository.PaysParMotCle("%"+motCle+"%",new PageRequest(page,5));
		
	}
	
	@RequestMapping(value="/deletePays/{codePays}",method=RequestMethod.DELETE)
	public boolean deleteProduit(@PathVariable Long codePays) {
		paysRepository.delete(codePays);
		return true;
	}
	
	@RequestMapping(value="/paysByReference/{reference}",method=RequestMethod.GET)
	public Pays getProduitByRef(@PathVariable Long reference) {
		Pays pays = new Pays();
		pays= paysRepository.PaysParId(reference);
		return pays;
	}
	
	@RequestMapping(value="/updatePays")
	public Pays updateProduitByReference(@RequestBody Pays paysUpdate) {
		paysRepository.saveAndFlush(paysUpdate);
		return paysUpdate;
	}
	
}
