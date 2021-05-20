package hu.prf.kotprog.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Termek")
public class Termek {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

    private int ar;

    private String nev;

    public Termek() {
    }

    public Termek(int id, int ar, String nev) {
        this.id = id;
        this.ar = ar;
        this.nev = nev;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAr() {
        return ar;
    }

    public void setAr(int ar) {
        this.ar = ar;
    }

    public String getNev() {
        return nev;
    }

    public void setNev(String nev) {
        this.nev = nev;
    }

    @Override
    public String toString() {
        return "Termek [ar=" + ar + ", id=" + id + ", nev=" + nev + "]";
    }

    
}
