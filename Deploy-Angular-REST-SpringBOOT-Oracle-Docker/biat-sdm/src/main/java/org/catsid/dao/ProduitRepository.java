package org.catsid.dao;

import java.util.List;

import org.catsid.entities.Produit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProduitRepository extends JpaRepository<Produit, Long>{

	@Query("select pr from Produit pr inner join pr.pays where pr.reference =:x")
	public Produit ProduitParId(@Param("x") Long reference);
	
	//Toutes les requêttes passent par dispatcherServlet qui fait appel au controlleur
	@Query("select p from Produit p where p.designation like :x")
	public Page<Produit> ProduitParMotCle(@Param("x") String motCle,Pageable page);
	
	// Appelation findBy'Nom Variable avec premiére lettre majuscule'
	// Ici il va faire une requêtte : 
	// Select * from Produit p where p.designation= :x ;
	// Or on veux : Select * from Produit p where p.designation like :x ;
	// Donc on fait une fonction : ProduitParMotCle
	public List<Produit> findByDesignation(String designation);
	
	// Toujours dans Spring si on fait une fonction findBy'Nom variable' exemple : 
	// findByIdVariableDansEntities(Long idParamétre); c'est-à-dire que Spring va exécuter la requêtte : 
	// Select * from Produit p where p.idVariableDansEntities= :idParamétre ;
	// Normalement findById c'est tout mais j'ai ajouté dans l'explication
	// findByIdVariableDansEntities pour mieux comprendre
	public Page<Produit> findByDesignation(String designation,Pageable page);
}
