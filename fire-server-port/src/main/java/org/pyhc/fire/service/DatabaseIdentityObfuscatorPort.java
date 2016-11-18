package org.pyhc.fire.service;

import java.util.Collection;

public interface DatabaseIdentityObfuscatorPort {

    void hideId(Obfuscatable obfuscatable);

    void hideIds(Collection<? extends Obfuscatable> obfuscatables);

}
