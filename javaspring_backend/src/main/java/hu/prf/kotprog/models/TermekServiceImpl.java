package hu.prf.kotprog.models;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TermekServiceImpl implements TermekService{

    TermekRepository termekRepository;

    @Autowired
    public TermekServiceImpl(TermekRepository termekRepository) {
        this.termekRepository = termekRepository;
    }

    @Override
    public void addTermek(Termek termek) {
        this.termekRepository.save(termek);
        
    }

    @Override
    public List<Termek> getAllTermek() {
        List<Termek> list = this.termekRepository.findAll();
        return list;
    }

    @Override
    public Termek getTermekById(int id) {
        Termek termek = this.termekRepository.findById(id).get();
        return termek;
    }

    @Override
    public void deleteTermekById(int id) {
        this.termekRepository.deleteById(id);
    }
    
}
