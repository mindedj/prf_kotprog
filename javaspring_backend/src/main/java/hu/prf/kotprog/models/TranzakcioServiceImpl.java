package hu.prf.kotprog.models;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TranzakcioServiceImpl implements TranzakcioService {

    TranzakcioRepository tranzakcioRepository;

    
    @Autowired
    public TranzakcioServiceImpl(TranzakcioRepository tranzakcioRepository) {
        this.tranzakcioRepository = tranzakcioRepository;
    }

    @Override
    public void createTranzakcio(Tranzakcio tranzakcio){
        this.tranzakcioRepository.save(tranzakcio);
    }


    @Override
    public List<Tranzakcio> getAllTranzakcio() {
        List<Tranzakcio> list = this.tranzakcioRepository.findAll();
        return list;
    }
    
}
