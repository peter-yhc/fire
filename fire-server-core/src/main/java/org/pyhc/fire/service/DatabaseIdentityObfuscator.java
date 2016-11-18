package org.pyhc.fire.service;

import org.hashids.Hashids;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class DatabaseIdentityObfuscator implements DatabaseIdentityObfuscatorPort {

    private static final String TO_BE_REMOVED_SALT = "SUPER_SALTY";

    private Hashids hashids = new Hashids(TO_BE_REMOVED_SALT);

    @Override
    public void hideId(Obfuscatable obfuscatable) {
        String encodeHex = hashids.encodeHex(obfuscatable.getId());
        obfuscatable.setId(encodeHex);
    }

    @Override
    public void hideIds(Collection<? extends Obfuscatable> obfuscatables) {
        obfuscatables.forEach(this::hideId);
    }

}
