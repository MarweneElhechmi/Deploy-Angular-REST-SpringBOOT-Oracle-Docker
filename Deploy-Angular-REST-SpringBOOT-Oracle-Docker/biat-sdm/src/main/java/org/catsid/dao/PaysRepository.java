package org.catsid.dao;

import org.catsid.entities.Pays;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PaysRepository extends JpaRepository<Pays, Long>{

	//Toutes les requêttes passent par dispatcherServlet qui fait appel au controlleur
		@Query("select p from Pays p where p.paysName like :x")
		public Page<Pays> PaysParMotCle(@Param("x") String motCle,Pageable page);
		
		@Query("select pr.pays from Produit pr inner join pr.pays where pr.reference =:x")
		public Pays PaysParId(@Param("x") Long reference);
}
