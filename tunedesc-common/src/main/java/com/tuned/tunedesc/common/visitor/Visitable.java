package com.tuned.tunedesc.common.visitor;



public interface Visitable {


    public void accept(BaseVisitor visitor);

    public Object getVisitor();


}
