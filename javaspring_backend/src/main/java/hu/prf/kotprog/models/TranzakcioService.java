package hu.prf.kotprog.models;

import java.util.List;

public interface TranzakcioService {
    void createTranzakcio(Tranzakcio tranzakcio);
    List<Tranzakcio> getAllTranzakcio();
}
