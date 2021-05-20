package hu.prf.kotprog.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="Tranzakcio")
public class Tranzakcio {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int termekid;

    private int osszeg;

    
    private String datum;
    
    public Tranzakcio() {
    }

    public Tranzakcio(int termekid, int osszeg, String datum) {
        this.termekid = termekid;
        this.osszeg = osszeg;
        this.datum = datum;
    }

    public int getTermekid() {
        return termekid;
    }

    public void setTermekid(int termekid) {
        this.termekid = termekid;
    }

    public int getOsszeg() {
        return osszeg;
    }

    public void setOsszeg(int osszeg) {
        this.osszeg = osszeg;
    }

    public String getDatum() {
        return datum;
    }

    public void setDatum(String datum) {
        this.datum = datum;
    }

    @Override
    public String toString() {
        return "Tranzakcio [datum=" + datum + ", osszeg=" + osszeg + ", termekid=" + termekid + "]";
    }

    
    

}
