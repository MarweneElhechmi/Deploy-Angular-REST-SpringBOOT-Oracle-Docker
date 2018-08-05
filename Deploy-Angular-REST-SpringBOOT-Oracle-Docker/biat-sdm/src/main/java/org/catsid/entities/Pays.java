package org.catsid.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Pays implements Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE ,generator = "pays_Sequence")
	@SequenceGenerator(name = "pays_Sequence", sequenceName = "PAYS_SEQ")
	private Long codePays;
	private String paysName;
	private String libelle;
	@OneToMany(mappedBy="pays",fetch=FetchType.LAZY)
	private Collection<Produit> produits;
	
	public Pays() {
		super();
	}

	
	
	public Pays(Long codePays, String paysName, String libelle) {
		super();
		this.codePays = codePays;
		this.paysName = paysName;
		this.libelle = libelle;
	}



	public Pays(String paysName, String libelle, Collection<Produit> produits) {
		super();
		this.paysName = paysName;
		this.libelle = libelle;
		this.produits = produits;
	}



	public Long getCodePays() {
		return codePays;
	}

	public void setCodePays(Long codePays) {
		this.codePays = codePays;
	}

	public String getPaysName() {
		return paysName;
	}

	public void setPaysName(String pays) {
		this.paysName = pays;
	}


	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	@JsonIgnore
	public Collection<Produit> getProduits() {
		return produits;
	}
	@JsonIgnore
	public void setProduits(Collection<Produit> produits) {
		this.produits = produits;
	}

}