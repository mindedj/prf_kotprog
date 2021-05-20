package hu.prf.kotprog.models;

import java.util.List;

public interface TermekService {
    void addTermek(Termek termek);
    List<Termek> getAllTermek();
    Termek getTermekById(int id);
    void deleteTermekById(int id);
}
