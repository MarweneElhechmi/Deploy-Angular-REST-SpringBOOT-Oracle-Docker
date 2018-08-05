package org.catsid.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;


@Entity
public class Produit implements Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator = "produit_Sequence")
	@SequenceGenerator(name = "produit_Sequence", sequenceName = "PRODUIT_SEQ")
	private Long reference;
	private String designation;
	private Double prix;
	private Date date_prod;
	@ManyToOne
	//@JoinColumn(name = "pays", nullable = false) : Ajoute une colonne de type number reference à pays
	private Pays pays;
	
	public Produit() {
		super();
	}

	public Produit(Long reference, String designation, Double prix, Date date_prod) {
		super();
		this.reference = reference;
		this.designation = designation;
		this.prix = prix;
		this.date_prod=date_prod;
	}

	public Long getReference() {
		return reference;
	}

	public void setReference(Long reference) {
		this.reference = reference;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public Double getPrix() {
		return prix;
	}

	public void setPrix(Double prix) {
		this.prix = prix;
	}

	public Date getDate() {
		return date_prod;
	}

	public void setDate(Date date_prod) {
		this.date_prod = date_prod;
	}

	public Pays getPays() {
		return pays;
	}

	public void setPays(Pays pays) {
		this.pays = pays;
	}
	
}
